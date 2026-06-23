export type PropertyType = "rent" | "buy";

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  furnished: "Fully-Furnished" | "Semi-Furnished" | "Unfurnished";
  image: string;
  tags: string[];
  postedAt: string;
  // TODO: add description, ownerName, contactNumber
}
