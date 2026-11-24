using System.Net.Http;
using Curlec.Api;
using Curlec.Core;
using Curlec.Core.Configuration;
using Curlec.Core.Logging;
using Curlec.Core.Models;

namespace Curlec;

/// <summary>
/// Razorpay payment gateway APIs for accepting payments, managing orders, processing refunds, payouts, and subscriptions. All amounts are in the smallest currency sub-unit (e.g. paise for INR). Supports 180+ payment methods including UPI, cards, netbanking, wallets, and EMI.
/// </summary>
public sealed class CurlecClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public CurlecClient(HttpClient httpClient, CurlecClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "CurlecClient/1.0.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("CURLEC_LOG"),
            "CurlecClient",
            options.TimeProvider);
        var responseContexts = new ResponseContextFactory(options.TimeProvider, options.StreamReadTimeout);
        _rawClient =
            new RawClient(
                httpClient,
                urlFactory,
                httpStatusPolicy,
                headersFactory,
                resiliencePipelineFactory,
                httpLogger,
                options.Hooks,
                responseContexts);
        _auth = new AuthSchemes(options, _server, _rawClient, urlFactory);
    }

    /// <summary>
    /// Razorpay Billme digital receipts and bills for retail, food &amp; beverage, events, and ecommerce.
    /// </summary>
    public Bills Bills => field ??= new Bills(_rawClient, _server, _auth);

    /// <summary>
    /// Customer profiles store contact information for recurring billing, saved cards, and personalised checkout. Each email+contact combination must be unique.
    /// </summary>
    public Customers Customers => field ??= new Customers(_rawClient, _server, _auth);

    /// <summary>
    /// Disputes (chargebacks) are raised by customers via their bank. You can accept (lose) or contest (challenge with evidence) each dispute. Monitor respond_by timestamp — missing the deadline forfeits the dispute.
    /// </summary>
    public Disputes Disputes => field ??= new Disputes(_rawClient, _server, _auth);

    /// <summary>
    /// Document uploads for dispute evidence. Upload JPEG, PNG, or PDF files and receive a document ID to reference in dispute contest submissions.
    /// </summary>
    public Documents Documents => field ??= new Documents(_rawClient, _server, _auth);

    /// <summary>
    /// On-demand settlements let you transfer your available Razorpay balance to your bank account immediately, outside the normal settlement cycle. Fees apply. Requires Instant Settlements to be enabled on your account.
    /// </summary>
    public InstantSettlements InstantSettlements => field ??= new InstantSettlements(_rawClient, _server, _auth);

    /// <summary>
    /// Invoices and payment pages for one-time or partial-payment collection. Create in draft, issue to the customer, and track payment status. Cannot be used for GST invoices (use the Dashboard for those). Maximum 50 line items per invoice.
    /// </summary>
    public Invoices Invoices => field ??= new Invoices(_rawClient, _server, _auth);

    /// <summary>
    /// Reusable catalog items that can be referenced in invoice line items. Defining items once avoids repeating price and description on each invoice.
    /// </summary>
    public Items Items => field ??= new Items(_rawClient, _server, _auth);

    /// <summary>
    /// Sub-merchant accounts (Linked Accounts) created under a Route marketplace. Includes account creation, stakeholder KYC, and Route product activation. Uses /v2/ API base path. Only one stakeholder is allowed per Linked Account. email and business_type cannot be changed after creation.
    /// </summary>
    public LinkedAccounts LinkedAccounts => field ??= new LinkedAccounts(_rawClient, _server, _auth);

    /// <summary>
    /// Orders are the starting point for accepting a payment. Create an order with the amount and currency, pass the order_id to Razorpay Checkout, then verify the payment signature after success.
    /// </summary>
    public Orders Orders => field ??= new Orders(_rawClient, _server, _auth);

    /// <summary>
    /// Sub-merchant account lifecycle management via Partners API (Aggregator/Platform model). Uses OAuth access_token authentication.
    /// </summary>
    public PartnerAccounts PartnerAccounts => field ??= new PartnerAccounts(_rawClient, _server, _auth);

    /// <summary>
    /// Upload and fetch KYC documents for sub-merchant accounts and their stakeholders.
    /// </summary>
    public PartnerDocuments PartnerDocuments => field ??= new PartnerDocuments(_rawClient, _server, _auth);

    /// <summary>
    /// Manage stakeholders (directors/executives) for sub-merchant accounts. Multiple stakeholders allowed per account.
    /// </summary>
    public PartnerStakeholders PartnerStakeholders => field ??= new PartnerStakeholders(_rawClient, _server, _auth);

    /// <summary>
    /// Configure webhooks for sub-merchant accounts to receive payment events. Maximum 30 per account.
    /// </summary>
    public PartnerWebhooks PartnerWebhooks => field ??= new PartnerWebhooks(_rawClient, _server, _auth);

    /// <summary>
    /// Scheduled and live downtime information for card, netbanking, and UPI. Poll or subscribe to payment.downtime webhooks to detect degraded methods and adjust your checkout UI.
    /// </summary>
    public PaymentDowntimes PaymentDowntimes => field ??= new PaymentDowntimes(_rawClient, _server, _auth);

    /// <summary>
    /// Payment Links are shareable URLs to collect payments without a website. Share via SMS, email, or any channel. Supports partial payments, expiry, reminders, UPI-only mode, offers, and transfers to linked accounts.
    /// </summary>
    public PaymentLinks PaymentLinks => field ??= new PaymentLinks(_rawClient, _server, _auth);

    /// <summary>
    /// A payment is created when a customer completes checkout. Payments can be auto-captured or manually captured. Fetch payment details to reconcile and diagnose failures.
    /// </summary>
    public Payments Payments => field ??= new Payments(_rawClient, _server, _auth);

    /// <summary>
    /// Billing plan definitions for recurring subscriptions. A plan sets the billing period, interval, and per-cycle charge. Plans are reusable across multiple subscriptions and cannot be modified after creation.
    /// </summary>
    public Plans Plans => field ??= new Plans(_rawClient, _server, _auth);

    /// <summary>
    /// QR Codes enable offline and digital payment collection. Customers scan with any UPI or card app. Supports fixed-amount and variable-amount codes, single-use and multiple-use modes.
    /// </summary>
    public QrCodes QrCodes => field ??= new QrCodes(_rawClient, _server, _auth);

    /// <summary>
    /// Refunds return captured payment amounts to customers. Normal refunds take 5-7 business days. Instant (optimum) refunds settle immediately but may fall back to normal. Use X-Refund-Idempotency header to safely retry without duplicates.
    /// </summary>
    public Refunds Refunds => field ??= new Refunds(_rawClient, _server, _auth);

    /// <summary>
    /// Settlements represent batch transfers of collected payment funds to your bank account. Use the recon endpoint for transaction-level reconciliation reports mapping each payment, refund, and adjustment to its settlement.
    /// </summary>
    public SettlementsApi SettlementsApi => field ??= new SettlementsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Recurring billing subscriptions. Customers must authorize a payment mandate (UPI Autopay, NACH, or card-on-file) via the short_url before charges begin. Supports pause/resume, plan changes, add-ons, and indefinite billing cycles.
    /// </summary>
    public Subscriptions Subscriptions => field ??= new Subscriptions(_rawClient, _server, _auth);

    /// <summary>
    /// Fund transfers from a merchant, payment, or order to a Linked Account (Route). Supports payment-based splits, direct on-demand transfers, settlement hold controls, and full/partial reversals. INR only, minimum ₹100. Direct transfers support idempotency via X-Transfer-Idempotency header.
    /// </summary>
    public Transfers Transfers => field ??= new Transfers(_rawClient, _server, _auth);

    /// <summary>
    /// Virtual bank accounts and UPI VPAs that accept NEFT/RTGS/IMPS/UPI payments (Smart Collect). Each incoming payment creates a BankTransfer entity. Supports Third Party Validation (TPV) to restrict payers, and VPA receivers (Smart Collect 2.0). Auto-closes after 90 days of inactivity.
    /// </summary>
    public VirtualAccounts VirtualAccounts => field ??= new VirtualAccounts(_rawClient, _server, _auth);

    /// <summary>
    /// Penny drop and reverse penny drop bank/VPA validation
    /// </summary>
    public XAccountValidation XAccountValidation => field ??= new XAccountValidation(_rawClient, _server, _auth);

    /// <summary>
    /// Fetch RazorpayX account balances
    /// </summary>
    public XBankingBalances XBankingBalances => field ??= new XBankingBalances(_rawClient, _server, _auth);

    /// <summary>
    /// RazorpayX payout recipients — create, fetch, update contacts
    /// </summary>
    public XContacts XContacts => field ??= new XContacts(_rawClient, _server, _auth);

    /// <summary>
    /// Payout destination accounts (bank, VPA, card) linked to contacts
    /// </summary>
    public XFundAccounts XFundAccounts => field ??= new XFundAccounts(_rawClient, _server, _auth);

    /// <summary>
    /// Payout links for recipients without saved fund accounts
    /// </summary>
    public XPayoutLinks XPayoutLinks => field ??= new XPayoutLinks(_rawClient, _server, _auth);

    /// <summary>
    /// Disbursements via NEFT, RTGS, IMPS, UPI, card — includes composite and approval flows
    /// </summary>
    public XPayouts XPayouts => field ??= new XPayouts(_rawClient, _server, _auth);

    /// <summary>
    /// Fetch RazorpayX transaction records — credits (bank_transfer inflows) and debits (payout outflows)
    /// </summary>
    public XTransactions XTransactions => field ??= new XTransactions(_rawClient, _server, _auth);
}
