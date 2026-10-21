import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountUpdaterSchema, type AccountUpdater } from "./unions/account-updater.js";
import { adyenAchSchema, type AdyenAch } from "./unions/adyen-ach.js";
import { adyenAfterpaySchema, type AdyenAfterpay } from "./unions/adyen-afterpay.js";
import { adyenAlipaySchema, type AdyenAlipay } from "./unions/adyen-alipay.js";
import { adyenCardSchema, type AdyenCard } from "./unions/adyen-card.js";
import { adyenCashappSchema, type AdyenCashapp } from "./unions/adyen-cashapp.js";
import { adyenCashappafterpaySchema, type AdyenCashappafterpay } from "./unions/adyen-cashappafterpay.js";
import { adyenGcashSchema, type AdyenGcash } from "./unions/adyen-gcash.js";
import { adyenGiropaySchema, type AdyenGiropay } from "./unions/adyen-giropay.js";
import { adyenIdealSchema, type AdyenIdeal } from "./unions/adyen-ideal.js";
import { adyenKonbiniSchema, type AdyenKonbini } from "./unions/adyen-konbini.js";
import { adyenPaybybankSchema, type AdyenPaybybank } from "./unions/adyen-paybybank.js";
import { adyenPaypaySchema, type AdyenPaypay } from "./unions/adyen-paypay.js";
import { adyenPixSchema, type AdyenPix } from "./unions/adyen-pix.js";
import { adyenSepaSchema, type AdyenSepa } from "./unions/adyen-sepa.js";
import { adyenSevenelevenSchema, type AdyenSeveneleven } from "./unions/adyen-seveneleven.js";
import { adyenSofortSchema, type AdyenSofort } from "./unions/adyen-sofort.js";
import { adyenSwishSchema, type AdyenSwish } from "./unions/adyen-swish.js";
import { adyenVippsSchema, type AdyenVipps } from "./unions/adyen-vipps.js";
import { affirmAffirmSchema, type AffirmAffirm } from "./unions/affirm-affirm.js";
import { braintreeCardSchema, type BraintreeCard } from "./unions/braintree-card.js";
import { chaseorbitalCardSchema, type ChaseorbitalCard } from "./unions/chaseorbital-card.js";
import { cybersourceAntiFraudSchema, type CybersourceAntiFraud } from "./unions/cybersource-anti-fraud.js";
import { cybersourceCardSchema, type CybersourceCard } from "./unions/cybersource-card.js";
import { cybersourceIdealSchema, type CybersourceIdeal } from "./unions/cybersource-ideal.js";
import { cybersourceKcpSchema, type CybersourceKcp } from "./unions/cybersource-kcp.js";
import { dlocalCardSchema, type DlocalCard } from "./unions/dlocal-card.js";
import { dlocalGcashSchema, type DlocalGcash } from "./unions/dlocal-gcash.js";
import { dlocalNequiSchema, type DlocalNequi } from "./unions/dlocal-nequi.js";
import { dlocalPixSchema, type DlocalPix } from "./unions/dlocal-pix.js";
import { dlocalUpiSchema, type DlocalUpi } from "./unions/dlocal-upi.js";
import { ecommpayCardSchema, type EcommpayCard } from "./unions/ecommpay-card.js";
import { fiservCardSchema, type FiservCard } from "./unions/fiserv-card.js";
import { forterAntiFraudSchema, type ForterAntiFraud } from "./unions/forter-anti-fraud.js";
import { gemGemSchema, type GemGem } from "./unions/gem-gem.js";
import { gemGemdsSchema, type GemGemds } from "./unions/gem-gemds.js";
import {
  givingblockGivingblockSchema,
  type GivingblockGivingblock,
} from "./unions/givingblock-givingblock.js";
import { gocardlessGocardlessSchema, type GocardlessGocardless } from "./unions/gocardless-gocardless.js";
import { klarnaKlarnaSchema, type KlarnaKlarna } from "./unions/klarna-klarna.js";
import { latitudeLatitudeSchema, type LatitudeLatitude } from "./unions/latitude-latitude.js";
import { latitudeLatitudedsSchema, type LatitudeLatitudeds } from "./unions/latitude-latitudeds.js";
import { mattildaTapiSchema, type MattildaTapi } from "./unions/mattilda-tapi.js";
import { mattildaTapifintechsSchema, type MattildaTapifintechs } from "./unions/mattilda-tapifintechs.js";
import { mockCardSchema, type MockCard } from "./unions/mock-card.js";
import { mockdsCardSchema, type MockdsCard } from "./unions/mockds-card.js";
import { monatoSpeiSchema, type MonatoSpei } from "./unions/monato-spei.js";
import { nuveiCardSchema, type NuveiCard } from "./unions/nuvei-card.js";
import { nuveiIdealSchema, type NuveiIdeal } from "./unions/nuvei-ideal.js";
import { nuveiKlarnaSchema, type NuveiKlarna } from "./unions/nuvei-klarna.js";
import { nuveiPseSchema, type NuveiPse } from "./unions/nuvei-pse.js";
import { oxxoOxxoSchema, type OxxoOxxo } from "./unions/oxxo-oxxo.js";
import { paypalPaypalSchema, type PaypalPaypal } from "./unions/paypal-paypal.js";
import {
  paypalPaypaldirectorderSchema,
  type PaypalPaypaldirectorder,
} from "./unions/paypal-paypaldirectorder.js";
import { paypalPaypalpaylaterSchema, type PaypalPaypalpaylater } from "./unions/paypal-paypalpaylater.js";
import { powertranzCardSchema, type PowertranzCard } from "./unions/powertranz-card.js";
import { repayBankSchema, type RepayBank } from "./unions/repay-bank.js";
import { riskifiedAntiFraudSchema, type RiskifiedAntiFraud } from "./unions/riskified-anti-fraud.js";
import { ryftCardSchema, type RyftCard } from "./unions/ryft-card.js";
import { stripeAffirmSchema, type StripeAffirm } from "./unions/stripe-affirm.js";
import { stripeCardSchema, type StripeCard } from "./unions/stripe-card.js";
import { stripeKlarnaSchema, type StripeKlarna } from "./unions/stripe-klarna.js";
import { stripeOnelinkSchema, type StripeOnelink } from "./unions/stripe-onelink.js";
import { stripeStripeSchema, type StripeStripe } from "./unions/stripe-stripe.js";
import { travelhubCardSchema, type TravelhubCard } from "./unions/travelhub-card.js";
import { trustlyTrustlySchema, type TrustlyTrustly } from "./unions/trustly-trustly.js";
import { worldpayvapCardSchema, type WorldpayvapCard } from "./unions/worldpayvap-card.js";
import { wpayEverydaypaySchema, type WpayEverydaypay } from "./unions/wpay-everydaypay.js";
import { wpayPaytoSchema, type WpayPayto } from "./unions/wpay-payto.js";

export type TransactionConnectionOptions = {
  /**
   * Custom options to be passed to the `account-updater` connector, allowing for simulating
   * different account updater responses.
   */
  accountUpdater?: AccountUpdater;
  /** Custom options to be passed to the `adyen-ach` connector. */
  adyenAch?: AdyenAch;
  /** Custom options to be passed to the `adyen-afterpay` connector. */
  adyenAfterpay?: AdyenAfterpay;
  /** Custom options to be passed to the `adyen-cashappafterpay` connector. */
  adyenCashappafterpay?: AdyenCashappafterpay;
  /** Custom options to be passed to the `adyen-alipay` connector. */
  adyenAlipay?: AdyenAlipay;
  /** Custom options to be passed to the `adyen-card` connector. */
  adyenCard?: AdyenCard;
  /** Custom options to be passed to the `adyen-cashapp` connector. */
  adyenCashapp?: AdyenCashapp;
  /** Custom options to be passed to the `adyen-gcash` connector. */
  adyenGcash?: AdyenGcash;
  /** Custom options to be passed to the `adyen-giropay` connector. */
  adyenGiropay?: AdyenGiropay;
  /** Custom options to be passed to the `adyen-ideal` connector. */
  adyenIdeal?: AdyenIdeal;
  /** Custom options to be passed to the `adyen-konbini` connector. */
  adyenKonbini?: AdyenKonbini;
  /** Custom options to be passed to the `adyen-paybybank` connector. */
  adyenPaybybank?: AdyenPaybybank;
  /** Custom options to be passed to the `adyen-paypay` connector. */
  adyenPaypay?: AdyenPaypay;
  /** Custom options to be passed to the `adyen-pix` connector. */
  adyenPix?: AdyenPix;
  /** Custom options to be passed to the `adyen-sepa` connector. */
  adyenSepa?: AdyenSepa;
  /** Custom options to be passed to the `adyen-seveneleven` connector. */
  adyenSeveneleven?: AdyenSeveneleven;
  /** Custom options to be passed to the `adyen-sofort` connector. */
  adyenSofort?: AdyenSofort;
  /** Custom options to be passed to the `adyen-swish` connector. */
  adyenSwish?: AdyenSwish;
  /** Custom options to be passed to the `adyen-vipps` connector. */
  adyenVipps?: AdyenVipps;
  /** Custom options to be passed to the `affirm-affirm` connector. */
  affirmAffirm?: AffirmAffirm;
  /** Custom options to be passed to the `braintree-card` connector. */
  braintreeCard?: BraintreeCard;
  /** Custom options to be passed to the `chaseorbital-card` connector. */
  chaseorbitalCard?: ChaseorbitalCard;
  /** Custom options to be passed to the `cybersource-anti-fraud` connector. */
  cybersourceAntiFraud?: CybersourceAntiFraud;
  /** Custom options to be passed to the `cybersource-card` connector. */
  cybersourceCard?: CybersourceCard;
  /** Custom options to be passed to the `cybersource-ideal` connector. */
  cybersourceIdeal?: CybersourceIdeal;
  /** Custom options to be passed to the `cybersource-kcp` connector. */
  cybersourceKcp?: CybersourceKcp;
  /** Custom options to be passed to the `dlocal-card` connector. */
  dlocalCard?: DlocalCard;
  /** Custom options to be passed to the `dlocal-nequi` connector. */
  dlocalNequi?: DlocalNequi;
  /** Custom options to be passed to the `dlocal-upi` connector. */
  dlocalUpi?: DlocalUpi;
  /** Custom options to be passed to the `dlocal-pix` connector. */
  dlocalPix?: DlocalPix;
  /** Custom options to be passed to the `dlocal-gcash` connector. */
  dlocalGcash?: DlocalGcash;
  /** Custom options to be passed to the `ecommpay-card` connector. */
  ecommpayCard?: EcommpayCard;
  /** Custom options to be passed to the `klarna-klarna` connector. */
  klarnaKlarna?: KlarnaKlarna;
  /** Custom options to be passed to the `fiserv-card` connector. */
  fiservCard?: FiservCard;
  /** Custom options to be passed to the `forter-anti-fraud` connector. */
  forterAntiFraud?: ForterAntiFraud;
  /** Custom options to be passed to the `gem-gem` connector. */
  gemGem?: GemGem;
  /** Custom options to be passed to the `gem-gemds` connector. */
  gemGemds?: GemGemds;
  /** Custom options to be passed to the `givingblock-givingblock` connector. */
  givingblockGivingblock?: GivingblockGivingblock;
  /** Custom options to be passed to the `gocardless-gocardless` connector. */
  gocardlessGocardless?: GocardlessGocardless;
  /** Custom options to be passed to the `latitude-latitude` connector. */
  latitudeLatitude?: LatitudeLatitude;
  /** Custom options to be passed to the `latitude-latitudeds` connector. */
  latitudeLatitudeds?: LatitudeLatitudeds;
  /** Custom options to be passed to the `mattilda-tapi` connector. */
  mattildaTapi?: MattildaTapi;
  /** Custom options to be passed to the `mattilda-tapifintechs` connector. */
  mattildaTapifintechs?: MattildaTapifintechs;
  /** Custom options to be passed to the `monato-spei` connector. */
  monatoSpei?: MonatoSpei;
  /** Custom options to be passed to the `mock-card` connector. */
  mockCard?: MockCard;
  /** Custom options to be passed to the `mockds-card` connector. */
  mockdsCard?: MockdsCard;
  /** Custom options to be passed to the `nuvei-card` connector. */
  nuveiCard?: NuveiCard;
  /** Custom options to be passed to the `nuvei-ideal` connector. */
  nuveiIdeal?: NuveiIdeal;
  /** Custom options to be passed to the `nuvei-klarna` connector. */
  nuveiKlarna?: NuveiKlarna;
  /** Custom options to be passed to the `nuvei-pse` connector. */
  nuveiPse?: NuveiPse;
  /** Custom options to be passed to the `oxxo-oxxo` connector. */
  oxxoOxxo?: OxxoOxxo;
  /** Custom options to be passed to the `paypal-paypal` connector. */
  paypalPaypal?: PaypalPaypal;
  /** Custom options to be passed to the `paypal-paypaldirectorder` connector. */
  paypalPaypaldirectorder?: PaypalPaypaldirectorder;
  /** Custom options to be passed to the `paypal-paypalpaylater` connector. */
  paypalPaypalpaylater?: PaypalPaypalpaylater;
  /** Custom options to be passed to the `powertranz-card` connector. */
  powertranzCard?: PowertranzCard;
  /** Custom options to be passed to the `repay-bank` connector. */
  repayBank?: RepayBank;
  /** Custom options to be passed to the `riskified-anti-fraud` connector. */
  riskifiedAntiFraud?: RiskifiedAntiFraud;
  /** Custom options to be passed to the `ryft-card` connector. */
  ryftCard?: RyftCard;
  /** Custom options to be passed to the `stripe-affirm` connector. */
  stripeAffirm?: StripeAffirm;
  /** Custom options to be passed to the `stripe-card` connector. */
  stripeCard?: StripeCard;
  /** Custom options to be passed to the `stripe-klarna` connector. */
  stripeKlarna?: StripeKlarna;
  /** Custom options to be passed to the `stripe-onelink` connector. */
  stripeOnelink?: StripeOnelink;
  /** Custom options to be passed to the `stripe-stripe` connector. */
  stripeStripe?: StripeStripe;
  /** Custom options to be passed to the `travelhub-card` connector. */
  travelhubCard?: TravelhubCard;
  /** Custom options to be passed to the `trustly-trustly` connector. */
  trustlyTrustly?: TrustlyTrustly;
  /** Custom options to be passed to the `worldpayvap-card` connector. */
  worldpayvapCard?: WorldpayvapCard;
  /** Custom options to be passed to the `wpay-everydaypay` connector. */
  wpayEverydaypay?: WpayEverydaypay;
  /** Custom options to be passed to the `wpay-payto` connector. */
  wpayPayto?: WpayPayto;
};

export const transactionConnectionOptionsSchema: Schema<TransactionConnectionOptions> =
  s.object<TransactionConnectionOptions>({
    accountUpdater: s.optional(s.lazy(() => accountUpdaterSchema)),
    adyenAch: s.optional(s.lazy(() => adyenAchSchema)),
    adyenAfterpay: s.optional(s.lazy(() => adyenAfterpaySchema)),
    adyenCashappafterpay: s.optional(s.lazy(() => adyenCashappafterpaySchema)),
    adyenAlipay: s.optional(s.lazy(() => adyenAlipaySchema)),
    adyenCard: s.optional(s.lazy(() => adyenCardSchema)),
    adyenCashapp: s.optional(s.lazy(() => adyenCashappSchema)),
    adyenGcash: s.optional(s.lazy(() => adyenGcashSchema)),
    adyenGiropay: s.optional(s.lazy(() => adyenGiropaySchema)),
    adyenIdeal: s.optional(s.lazy(() => adyenIdealSchema)),
    adyenKonbini: s.optional(s.lazy(() => adyenKonbiniSchema)),
    adyenPaybybank: s.optional(s.lazy(() => adyenPaybybankSchema)),
    adyenPaypay: s.optional(s.lazy(() => adyenPaypaySchema)),
    adyenPix: s.optional(s.lazy(() => adyenPixSchema)),
    adyenSepa: s.optional(s.lazy(() => adyenSepaSchema)),
    adyenSeveneleven: s.optional(s.lazy(() => adyenSevenelevenSchema)),
    adyenSofort: s.optional(s.lazy(() => adyenSofortSchema)),
    adyenSwish: s.optional(s.lazy(() => adyenSwishSchema)),
    adyenVipps: s.optional(s.lazy(() => adyenVippsSchema)),
    affirmAffirm: s.optional(s.lazy(() => affirmAffirmSchema)),
    braintreeCard: s.optional(s.lazy(() => braintreeCardSchema)),
    chaseorbitalCard: s.optional(s.lazy(() => chaseorbitalCardSchema)),
    cybersourceAntiFraud: s.optional(s.lazy(() => cybersourceAntiFraudSchema)),
    cybersourceCard: s.optional(s.lazy(() => cybersourceCardSchema)),
    cybersourceIdeal: s.optional(s.lazy(() => cybersourceIdealSchema)),
    cybersourceKcp: s.optional(s.lazy(() => cybersourceKcpSchema)),
    dlocalCard: s.optional(s.lazy(() => dlocalCardSchema)),
    dlocalNequi: s.optional(s.lazy(() => dlocalNequiSchema)),
    dlocalUpi: s.optional(s.lazy(() => dlocalUpiSchema)),
    dlocalPix: s.optional(s.lazy(() => dlocalPixSchema)),
    dlocalGcash: s.optional(s.lazy(() => dlocalGcashSchema)),
    ecommpayCard: s.optional(s.lazy(() => ecommpayCardSchema)),
    klarnaKlarna: s.optional(s.lazy(() => klarnaKlarnaSchema)),
    fiservCard: s.optional(s.lazy(() => fiservCardSchema)),
    forterAntiFraud: s.optional(s.lazy(() => forterAntiFraudSchema)),
    gemGem: s.optional(s.lazy(() => gemGemSchema)),
    gemGemds: s.optional(s.lazy(() => gemGemdsSchema)),
    givingblockGivingblock: s.optional(s.lazy(() => givingblockGivingblockSchema)),
    gocardlessGocardless: s.optional(s.lazy(() => gocardlessGocardlessSchema)),
    latitudeLatitude: s.optional(s.lazy(() => latitudeLatitudeSchema)),
    latitudeLatitudeds: s.optional(s.lazy(() => latitudeLatitudedsSchema)),
    mattildaTapi: s.optional(s.lazy(() => mattildaTapiSchema)),
    mattildaTapifintechs: s.optional(s.lazy(() => mattildaTapifintechsSchema)),
    monatoSpei: s.optional(s.lazy(() => monatoSpeiSchema)),
    mockCard: s.optional(s.lazy(() => mockCardSchema)),
    mockdsCard: s.optional(s.lazy(() => mockdsCardSchema)),
    nuveiCard: s.optional(s.lazy(() => nuveiCardSchema)),
    nuveiIdeal: s.optional(s.lazy(() => nuveiIdealSchema)),
    nuveiKlarna: s.optional(s.lazy(() => nuveiKlarnaSchema)),
    nuveiPse: s.optional(s.lazy(() => nuveiPseSchema)),
    oxxoOxxo: s.optional(s.lazy(() => oxxoOxxoSchema)),
    paypalPaypal: s.optional(s.lazy(() => paypalPaypalSchema)),
    paypalPaypaldirectorder: s.optional(s.lazy(() => paypalPaypaldirectorderSchema)),
    paypalPaypalpaylater: s.optional(s.lazy(() => paypalPaypalpaylaterSchema)),
    powertranzCard: s.optional(s.lazy(() => powertranzCardSchema)),
    repayBank: s.optional(s.lazy(() => repayBankSchema)),
    riskifiedAntiFraud: s.optional(s.lazy(() => riskifiedAntiFraudSchema)),
    ryftCard: s.optional(s.lazy(() => ryftCardSchema)),
    stripeAffirm: s.optional(s.lazy(() => stripeAffirmSchema)),
    stripeCard: s.optional(s.lazy(() => stripeCardSchema)),
    stripeKlarna: s.optional(s.lazy(() => stripeKlarnaSchema)),
    stripeOnelink: s.optional(s.lazy(() => stripeOnelinkSchema)),
    stripeStripe: s.optional(s.lazy(() => stripeStripeSchema)),
    travelhubCard: s.optional(s.lazy(() => travelhubCardSchema)),
    trustlyTrustly: s.optional(s.lazy(() => trustlyTrustlySchema)),
    worldpayvapCard: s.optional(s.lazy(() => worldpayvapCardSchema)),
    wpayEverydaypay: s.optional(s.lazy(() => wpayEverydaypaySchema)),
    wpayPayto: s.optional(s.lazy(() => wpayPaytoSchema)),
    _keysMap: {
      accountUpdater: "account-updater",
      adyenAch: "adyen-ach",
      adyenAfterpay: "adyen-afterpay",
      adyenCashappafterpay: "adyen-cashappafterpay",
      adyenAlipay: "adyen-alipay",
      adyenCard: "adyen-card",
      adyenCashapp: "adyen-cashapp",
      adyenGcash: "adyen-gcash",
      adyenGiropay: "adyen-giropay",
      adyenIdeal: "adyen-ideal",
      adyenKonbini: "adyen-konbini",
      adyenPaybybank: "adyen-paybybank",
      adyenPaypay: "adyen-paypay",
      adyenPix: "adyen-pix",
      adyenSepa: "adyen-sepa",
      adyenSeveneleven: "adyen-seveneleven",
      adyenSofort: "adyen-sofort",
      adyenSwish: "adyen-swish",
      adyenVipps: "adyen-vipps",
      affirmAffirm: "affirm-affirm",
      braintreeCard: "braintree-card",
      chaseorbitalCard: "chaseorbital-card",
      cybersourceAntiFraud: "cybersource-anti-fraud",
      cybersourceCard: "cybersource-card",
      cybersourceIdeal: "cybersource-ideal",
      cybersourceKcp: "cybersource-kcp",
      dlocalCard: "dlocal-card",
      dlocalNequi: "dlocal-nequi",
      dlocalUpi: "dlocal-upi",
      dlocalPix: "dlocal-pix",
      dlocalGcash: "dlocal-gcash",
      ecommpayCard: "ecommpay-card",
      klarnaKlarna: "klarna-klarna",
      fiservCard: "fiserv-card",
      forterAntiFraud: "forter-anti-fraud",
      gemGem: "gem-gem",
      gemGemds: "gem-gemds",
      givingblockGivingblock: "givingblock-givingblock",
      gocardlessGocardless: "gocardless-gocardless",
      latitudeLatitude: "latitude-latitude",
      latitudeLatitudeds: "latitude-latitudeds",
      mattildaTapi: "mattilda-tapi",
      mattildaTapifintechs: "mattilda-tapifintechs",
      monatoSpei: "monato-spei",
      mockCard: "mock-card",
      mockdsCard: "mockds-card",
      nuveiCard: "nuvei-card",
      nuveiIdeal: "nuvei-ideal",
      nuveiKlarna: "nuvei-klarna",
      nuveiPse: "nuvei-pse",
      oxxoOxxo: "oxxo-oxxo",
      paypalPaypal: "paypal-paypal",
      paypalPaypaldirectorder: "paypal-paypaldirectorder",
      paypalPaypalpaylater: "paypal-paypalpaylater",
      powertranzCard: "powertranz-card",
      repayBank: "repay-bank",
      riskifiedAntiFraud: "riskified-anti-fraud",
      ryftCard: "ryft-card",
      stripeAffirm: "stripe-affirm",
      stripeCard: "stripe-card",
      stripeKlarna: "stripe-klarna",
      stripeOnelink: "stripe-onelink",
      stripeStripe: "stripe-stripe",
      travelhubCard: "travelhub-card",
      trustlyTrustly: "trustly-trustly",
      worldpayvapCard: "worldpayvap-card",
      wpayEverydaypay: "wpay-everydaypay",
      wpayPayto: "wpay-payto",
    },
  });
