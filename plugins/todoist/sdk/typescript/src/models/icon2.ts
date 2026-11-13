import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Updated project icon name. Pass null to reset to the default icon. Omit this field to keep it
 * unchanged.
 */
export const Icon2 = {
  Briefcase: "briefcase",
  Folder: "folder",
  Diagram: "diagram",
  Headset: "headset",
  Microphone: "microphone",
  Flag: "flag",
  Bullseye: "bullseye",
  House: "house",
  Heart: "heart",
  Airplane: "airplane",
  Gift: "gift",
  Pin: "pin",
  SchoolCap: "school_cap",
  Lightbulb: "lightbulb",
  Star: "star",
  CommandPrompt: "command_prompt",
  Laptop: "laptop",
  Envelope: "envelope",
  Calendar: "calendar",
  Person: "person",
  Sofa: "sofa",
  CupAndHeatWaves: "cup_and_heat_waves",
  Paintpalette: "paintpalette",
  Broom: "broom",
  SunMax: "sun_max",
  Moon: "moon",
  BeachUmbrella: "beach_umbrella",
  Pizza: "pizza",
  CheckmarkLine3: "checkmark_line_3",
  Basketball: "basketball",
  FaceSmiling: "face_smiling",
  Dog: "dog",
  Dollarsign: "dollarsign",
  Smartphone: "smartphone",
  Person2: "person_2",
  ChartLineUptrendXyaxisInSquare: "chart_line_uptrend_xyaxis_in_square",
  LaboratoryFlask: "laboratory_flask",
  Telescope: "telescope",
  Book: "book",
  Document: "document",
  Sparkles: "sparkles",
  Video: "video",
  Paintbrush: "paintbrush",
  PuzzlepieceExtension: "puzzlepiece_extension",
  Clock: "clock",
} as const;
export type Icon2 = (typeof Icon2)[keyof typeof Icon2] | (string & {});

export const icon2Schema: EnumSchema<Icon2> = s.enumOf<Icon2>(Icon2);
