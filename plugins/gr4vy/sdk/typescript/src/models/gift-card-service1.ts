import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardServiceProvider2Schema,
  type GiftCardServiceProvider2,
} from "./gift-card-service-provider2.js";
import { Type32, type32Schema } from "./type32.js";

/** The service this gift card was issued against. */
export type GiftCardService1 = {
  /** Always `gift-card-service`. @default Type32.GiftCardService */
  type?: Type32;
  /** The ID for the gift card service. */
  id: string;
  /** The ID of the definition for this service. */
  giftCardServiceDefinitionId: GiftCardServiceProvider2;
  /** The display name for the gift card service. */
  displayName: string;
};

export const giftCardService1Schema: Schema<GiftCardService1> = s.object<GiftCardService1>({
  type: s.defaulted(type32Schema, Type32.GiftCardService),
  id: s.string(),
  giftCardServiceDefinitionId: giftCardServiceProvider2Schema,
  displayName: s.string(),
  _keysMap: {
    giftCardServiceDefinitionId: "gift_card_service_definition_id",
    displayName: "display_name",
  },
});
