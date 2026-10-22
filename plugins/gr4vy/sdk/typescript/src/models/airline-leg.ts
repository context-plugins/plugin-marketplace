import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { arrivalAirportSchema, type ArrivalAirport } from "./unions/arrival-airport.js";
import { arrivalAtSchema, type ArrivalAt } from "./unions/arrival-at.js";
import { arrivalCitySchema, type ArrivalCity } from "./unions/arrival-city.js";
import { arrivalCountrySchema, type ArrivalCountry } from "./unions/arrival-country.js";
import { carrierCodeSchema, type CarrierCode } from "./unions/carrier-code.js";
import { carrierNameSchema, type CarrierName } from "./unions/carrier-name.js";
import { couponNumberSchema, type CouponNumber } from "./unions/coupon-number.js";
import { departureAirportSchema, type DepartureAirport } from "./unions/departure-airport.js";
import { departureAtSchema, type DepartureAt } from "./unions/departure-at.js";
import { departureCitySchema, type DepartureCity } from "./unions/departure-city.js";
import { departureCountrySchema, type DepartureCountry } from "./unions/departure-country.js";
import { departureTaxAmountSchema, type DepartureTaxAmount } from "./unions/departure-tax-amount.js";
import { fareAmountSchema, type FareAmount } from "./unions/fare-amount.js";
import { fareBasisCodeSchema, type FareBasisCode } from "./unions/fare-basis-code.js";
import { feeAmountSchema, type FeeAmount } from "./unions/fee-amount.js";
import { flightClassSchema, type FlightClass } from "./unions/flight-class.js";
import { flightNumberSchema, type FlightNumber } from "./unions/flight-number.js";
import { iataDesignatorSchema, type IataDesignator } from "./unions/iata-designator.js";
import { icaoCodeSchema, type IcaoCode } from "./unions/icao-code.js";
import { routeType1Schema, type RouteType1 } from "./unions/route-type1.js";
import { seatClassSchema, type SeatClass } from "./unions/seat-class.js";
import { stopOverSchema, type StopOver } from "./unions/stop-over.js";
import { taxAmountSchema, type TaxAmount } from "./unions/tax-amount.js";

export type AirlineLeg = {
  /** Arrival airport code of leg. 3-letter ISO code according to IATA official directory. */
  arrivalAirport?: ArrivalAirport;
  /** The date and time of travel in local time at the arrival airport. */
  arrivalAt?: ArrivalAt;
  /** Arrival city name. */
  arrivalCity?: ArrivalCity;
  /** Arrival country code in ISO 3166 format. */
  arrivalCountry?: ArrivalCountry;
  /** 3 character airline code as set by IATA. */
  carrierCode?: CarrierCode;
  /** Name of the airline. */
  carrierName?: CarrierName;
  /** Two-character IATA code of the airline. */
  iataDesignator?: IataDesignator;
  /** Three-character ICAO code of the airline. */
  icaoCode?: IcaoCode;
  /** Coupon number associated with the leg. */
  couponNumber?: CouponNumber;
  /** Departure airport code of leg. 3-letter ISO code according to IATA official directory. */
  departureAirport?: DepartureAirport;
  /** The date and time of travel in local time at the departure airport. */
  departureAt?: DepartureAt;
  /** Departure city name. */
  departureCity?: DepartureCity;
  /** Departure airport code of leg. 3-letter ISO code according to IATA official directory. */
  departureCountry?: DepartureCountry;
  /** Departure tax amount charged by a country when a person is leaving the country. */
  departureTaxAmount?: DepartureTaxAmount;
  /** Amount of the ticket, for current leg of the trip, excluding taxes and fees. */
  fareAmount?: FareAmount;
  /** The alphanumeric code for the booking class of a ticket. */
  fareBasisCode?: FareBasisCode;
  /** Fee amount for current leg of the trip. */
  feeAmount?: FeeAmount;
  /** Indicates service class (first class, business class, etc.). */
  flightClass?: FlightClass;
  /** Unique identifier of the flight number. */
  flightNumber?: FlightNumber;
  /** The route type of the flight. */
  routeType?: RouteType1;
  /** Indicates seat class (first class, business class, etc.). */
  seatClass?: SeatClass;
  /** Indicates whether a stopover is allowed on this ticket. */
  stopOver?: StopOver;
  /** Amount of the taxes for current leg of the trip. */
  taxAmount?: TaxAmount;
};

export const airlineLegSchema: Schema<AirlineLeg> = s.object<AirlineLeg>({
  arrivalAirport: s.optional(s.lazy(() => arrivalAirportSchema)),
  arrivalAt: s.optional(s.lazy(() => arrivalAtSchema)),
  arrivalCity: s.optional(s.lazy(() => arrivalCitySchema)),
  arrivalCountry: s.optional(s.lazy(() => arrivalCountrySchema)),
  carrierCode: s.optional(s.lazy(() => carrierCodeSchema)),
  carrierName: s.optional(s.lazy(() => carrierNameSchema)),
  iataDesignator: s.optional(s.lazy(() => iataDesignatorSchema)),
  icaoCode: s.optional(s.lazy(() => icaoCodeSchema)),
  couponNumber: s.optional(s.lazy(() => couponNumberSchema)),
  departureAirport: s.optional(s.lazy(() => departureAirportSchema)),
  departureAt: s.optional(s.lazy(() => departureAtSchema)),
  departureCity: s.optional(s.lazy(() => departureCitySchema)),
  departureCountry: s.optional(s.lazy(() => departureCountrySchema)),
  departureTaxAmount: s.optional(s.lazy(() => departureTaxAmountSchema)),
  fareAmount: s.optional(s.lazy(() => fareAmountSchema)),
  fareBasisCode: s.optional(s.lazy(() => fareBasisCodeSchema)),
  feeAmount: s.optional(s.lazy(() => feeAmountSchema)),
  flightClass: s.optional(s.lazy(() => flightClassSchema)),
  flightNumber: s.optional(s.lazy(() => flightNumberSchema)),
  routeType: s.optional(s.lazy(() => routeType1Schema)),
  seatClass: s.optional(s.lazy(() => seatClassSchema)),
  stopOver: s.optional(s.lazy(() => stopOverSchema)),
  taxAmount: s.optional(s.lazy(() => taxAmountSchema)),
  _keysMap: {
    arrivalAirport: "arrival_airport",
    arrivalAt: "arrival_at",
    arrivalCity: "arrival_city",
    arrivalCountry: "arrival_country",
    carrierCode: "carrier_code",
    carrierName: "carrier_name",
    iataDesignator: "iata_designator",
    icaoCode: "icao_code",
    couponNumber: "coupon_number",
    departureAirport: "departure_airport",
    departureAt: "departure_at",
    departureCity: "departure_city",
    departureCountry: "departure_country",
    departureTaxAmount: "departure_tax_amount",
    fareAmount: "fare_amount",
    fareBasisCode: "fare_basis_code",
    feeAmount: "fee_amount",
    flightClass: "flight_class",
    flightNumber: "flight_number",
    routeType: "route_type",
    seatClass: "seat_class",
    stopOver: "stop_over",
    taxAmount: "tax_amount",
  },
});
