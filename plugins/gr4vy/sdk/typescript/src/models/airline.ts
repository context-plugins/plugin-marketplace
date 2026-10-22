import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingCodeSchema, type BookingCode } from "./unions/booking-code.js";
import { isCardholderTravelingSchema, type IsCardholderTraveling } from "./unions/is-cardholder-traveling.js";
import { issuedAddressSchema, type IssuedAddress } from "./unions/issued-address.js";
import { issuedAtSchema, type IssuedAt } from "./unions/issued-at.js";
import { issuingCarrierCodeSchema, type IssuingCarrierCode } from "./unions/issuing-carrier-code.js";
import { issuingCarrierNameSchema, type IssuingCarrierName } from "./unions/issuing-carrier-name.js";
import { issuingIataDesignatorSchema, type IssuingIataDesignator } from "./unions/issuing-iata-designator.js";
import { issuingIcaoCodeSchema, type IssuingIcaoCode } from "./unions/issuing-icao-code.js";
import { legsSchema, type Legs } from "./unions/legs.js";
import { passengerNameRecordSchema, type PassengerNameRecord } from "./unions/passenger-name-record.js";
import { passengersSchema, type Passengers } from "./unions/passengers.js";
import { reservationSystemSchema, type ReservationSystem } from "./unions/reservation-system.js";
import { restrictedTicketSchema, type RestrictedTicket } from "./unions/restricted-ticket.js";
import { ticketDeliveryMethod1Schema, type TicketDeliveryMethod1 } from "./unions/ticket-delivery-method1.js";
import { ticketNumber1Schema, type TicketNumber1 } from "./unions/ticket-number1.js";
import { travelAgencyCodeSchema, type TravelAgencyCode } from "./unions/travel-agency-code.js";
import {
  travelAgencyInvoiceNumberSchema,
  type TravelAgencyInvoiceNumber,
} from "./unions/travel-agency-invoice-number.js";
import { travelAgencyNameSchema, type TravelAgencyName } from "./unions/travel-agency-name.js";
import { travelAgencyPlanNameSchema, type TravelAgencyPlanName } from "./unions/travel-agency-plan-name.js";

/** Information about an airline travel. */
export type Airline = {
  /** The unique identifier of the reservation in the global distribution system. */
  bookingCode?: BookingCode;
  /** Indicates whether the cardholder is traveling. */
  isCardholderTraveling?: IsCardholderTraveling;
  /** The address of the place/agency that issued the ticket. */
  issuedAddress?: IssuedAddress;
  /** The date that the ticket was last issued in the airline reservation system. */
  issuedAt?: IssuedAt;
  /** For airline aggregators, three-character IATA code of the airline issuing the ticket. */
  issuingCarrierCode?: IssuingCarrierCode;
  /** For airline aggregators, name of the airline issuing the ticket. */
  issuingCarrierName?: IssuingCarrierName;
  /** For airline aggregators, two-character IATA code of the airline issuing the ticket. */
  issuingIataDesignator?: IssuingIataDesignator;
  /** For airline aggregators, three-character ICAO code of the airline issuing the ticket. */
  issuingIcaoCode?: IssuingIcaoCode;
  /** An array of separate trip segments. Each leg contains detailed itinerary information. */
  legs?: Legs;
  /** The Passenger Name Record (PNR) in the airline reservation system. */
  passengerNameRecord?: PassengerNameRecord;
  /** An array of the travelling passengers. */
  passengers?: Passengers;
  /** The name of the reservation system. */
  reservationSystem?: ReservationSystem;
  /** Indicates whether the ticket is restricted (refundable). */
  restrictedTicket?: RestrictedTicket;
  /** The delivery method of the ticket. */
  ticketDeliveryMethod?: TicketDeliveryMethod1;
  /** The airline's unique ticket number. */
  ticketNumber?: TicketNumber1;
  /** The IATA travel agency code. */
  travelAgencyCode?: TravelAgencyCode;
  /** The reference number of the invoice that was issued by the travel agency. */
  travelAgencyInvoiceNumber?: TravelAgencyInvoiceNumber;
  /** The name of the travel agency. */
  travelAgencyName?: TravelAgencyName;
  /** The name of the travel agency plan. */
  travelAgencyPlanName?: TravelAgencyPlanName;
};

export const airlineSchema: Schema<Airline> = s.object<Airline>({
  bookingCode: s.optional(s.lazy(() => bookingCodeSchema)),
  isCardholderTraveling: s.optional(s.lazy(() => isCardholderTravelingSchema)),
  issuedAddress: s.optional(s.lazy(() => issuedAddressSchema)),
  issuedAt: s.optional(s.lazy(() => issuedAtSchema)),
  issuingCarrierCode: s.optional(s.lazy(() => issuingCarrierCodeSchema)),
  issuingCarrierName: s.optional(s.lazy(() => issuingCarrierNameSchema)),
  issuingIataDesignator: s.optional(s.lazy(() => issuingIataDesignatorSchema)),
  issuingIcaoCode: s.optional(s.lazy(() => issuingIcaoCodeSchema)),
  legs: s.optional(s.lazy(() => legsSchema)),
  passengerNameRecord: s.optional(s.lazy(() => passengerNameRecordSchema)),
  passengers: s.optional(s.lazy(() => passengersSchema)),
  reservationSystem: s.optional(s.lazy(() => reservationSystemSchema)),
  restrictedTicket: s.optional(s.lazy(() => restrictedTicketSchema)),
  ticketDeliveryMethod: s.optional(s.lazy(() => ticketDeliveryMethod1Schema)),
  ticketNumber: s.optional(s.lazy(() => ticketNumber1Schema)),
  travelAgencyCode: s.optional(s.lazy(() => travelAgencyCodeSchema)),
  travelAgencyInvoiceNumber: s.optional(s.lazy(() => travelAgencyInvoiceNumberSchema)),
  travelAgencyName: s.optional(s.lazy(() => travelAgencyNameSchema)),
  travelAgencyPlanName: s.optional(s.lazy(() => travelAgencyPlanNameSchema)),
  _keysMap: {
    bookingCode: "booking_code",
    isCardholderTraveling: "is_cardholder_traveling",
    issuedAddress: "issued_address",
    issuedAt: "issued_at",
    issuingCarrierCode: "issuing_carrier_code",
    issuingCarrierName: "issuing_carrier_name",
    issuingIataDesignator: "issuing_iata_designator",
    issuingIcaoCode: "issuing_icao_code",
    passengerNameRecord: "passenger_name_record",
    reservationSystem: "reservation_system",
    restrictedTicket: "restricted_ticket",
    ticketDeliveryMethod: "ticket_delivery_method",
    ticketNumber: "ticket_number",
    travelAgencyCode: "travel_agency_code",
    travelAgencyInvoiceNumber: "travel_agency_invoice_number",
    travelAgencyName: "travel_agency_name",
    travelAgencyPlanName: "travel_agency_plan_name",
  },
});
