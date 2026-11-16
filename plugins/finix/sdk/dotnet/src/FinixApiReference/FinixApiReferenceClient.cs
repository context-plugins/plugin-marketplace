using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FinixApiReference.Api;
using FinixApiReference.Core;
using FinixApiReference.Core.Configuration;
using FinixApiReference.Core.Exceptions;
using FinixApiReference.Core.Logging;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Request;
using FinixApiReference.Core.Response;
using FinixApiReference.Errors;
using FinixApiReference.Requests;

namespace FinixApiReference;

/// <summary>
/// ---
/// seo:
///   title: Finix API Reference
///   description: API Reference Documentation for the Finix API. Includes sample API requests and responses.
/// ---
/// <para>
/// The Finix API is resource oriented, relying heavily on common REST principles. Our API uses JSON encoded requests and responses.
/// </para>
/// <para>
/// You will receive separate Sandbox and Live accounts, as well as corresponding API credentials to access the Finix API.
/// </para>
/// <para>
/// ---
/// </para>
/// <para>
/// ## Authentication
/// </para>
/// <para>
/// To communicate with the Finix API, you must authenticate your requests via HTTP Basic Authentication with a <c>username:password</c> combination, which you can get from your Finix Dashboard. If you do not have a Dashboard yet, you can test our APIs with the Sandbox credentials below.
/// </para>
/// <para>
/// {% table %}
/// </para>
/// <list type="bullet">
///   <item><description>Parameter</description></item>
///   <item><description>Value</description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description>Sandbox Username</description></item>
///   <item><description><c>USsRhsHYZGBPnQw8CByJyEQW</c></description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description>Sandbox Password</description></item>
///   <item><description><c>8a14c2f9-d94b-4c72-8f5c-a62908e5b30e</c></description></item>
/// </list>
/// <para>
/// {% /table %}
/// </para>
/// <code>
/// curl "https://finix.sandbox-payments-api.com/" \
///     -H "Content-Type: application/json" \
///     -H "Finix-Version: 2022-02-01" \
///     -u USsRhsHYZGBPnQw8CByJyEQW:8a14c2f9-d94b-4c72-8f5c-a62908e5b30e
/// </code>
/// <para>
/// ---
/// </para>
/// <para>
/// ## Environments
/// </para>
/// <para>
/// Finix provides two environments with distinct base URLs to make API requests.
/// </para>
/// <list type="number">
///   <item><description>A Sandbox environment for developing and testing your integration.</description></item>
///   <item><description>A Live environment for processing payments.</description></item>
/// </list>
/// <para>
/// These environments are entirely separate and do not share API Credentials.
/// </para>
/// <para>
/// {% table %}
/// </para>
/// <list type="bullet">
///   <item><description>Environment</description></item>
///   <item><description>Endpoint URL</description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description>Sandbox</description></item>
///   <item><description><c>https://finix.sandbox-payments-api.com</c></description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description>Live</description></item>
///   <item><description><c>https://finix.live-payments-api.com</c></description></item>
/// </list>
/// <para>
/// {% /table %}
/// </para>
/// <para>
/// {% admonition type="info" name="Live Access" %}
/// To get access to the Live environment, please reach out to your Finix point-of-contact.
/// {% /admonition %}
/// </para>
/// <para>
/// ---
/// </para>
/// <para>
/// ## HTTP Codes and Errors
/// </para>
/// <para>
/// Finix uses HTTP codes to communicate whether requests succeeded or failed. Requests to Finix's API return responses within less than one second.
/// </para>
/// <para>
/// However, communications between card networks and processors can increase response latency. Response latency for card-present devices can also be higher depending on how quickly buyers complete the transaction on payment terminals.
/// </para>
/// <para>
/// Due of this, requests to the Finix API have a maximum timeout of 5 minutes.
/// </para>
/// <para>
/// For more details, see <see href="/additional-resources/developers/implementation-and-testing/error-codes/">Error Codes</see>. Also, you can <see href="/additional-resources/developers/implementation-and-testing/testing-your-integration/">test for specific errors and responses</see>.
/// </para>
/// <para>
/// {% table %}
/// </para>
/// <list type="bullet">
///   <item><description>Code {% width="10%" %}</description></item>
///   <item><description>Definition {% width="35%" %}</description></item>
///   <item><description>Explanation {% width="55%" %}</description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description><c>400</c></description></item>
///   <item><description>Bad Request</description></item>
///   <item><description>We could not parse your request. Verify you are providing valid JSON.</description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description><c>401</c></description></item>
///   <item><description>Unauthorized</description></item>
///   <item><description>We could not authenticate your request. Verify your <c>username</c> and <c>password</c> are correct.</description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description><c>402</c></description></item>
///   <item><description>Upstream Processor Error</description></item>
///   <item><description>Errors caused by 3rd-party service(s).</description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description><c>403</c></description></item>
///   <item><description>Forbidden</description></item>
///   <item><description>Your credentials do not have the correct permissions to perform the request.</description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description><c>404</c></description></item>
///   <item><description>Not Found</description></item>
///   <item><description>We could not find the specified resource.</description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description><c>405</c></description></item>
///   <item><description>Method Not Allowed</description></item>
///   <item><description>The specified resource does not support the HTTP Method used to submit the request.</description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description><c>406</c></description></item>
///   <item><description>Not Acceptable</description></item>
///   <item><description>The server could accept the submitted request. Confirm how the request was formatted and submitted.</description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description><c>409</c></description></item>
///   <item><description>Conflict</description></item>
///   <item><description>The submitted request conflicts with the current state of the server.</description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description><c>422</c></description></item>
///   <item><description>Unprocessable Entity</description></item>
///   <item><description>The parameters were valid, but the request failed. Usually, the error involves misunderstanding of how to perform the request (e.g., creating a transfer with a seller that is not-yet-approved).</description></item>
/// </list>
/// <para>
/// ---
/// </para>
/// <list type="bullet">
///   <item><description><c>500</c></description></item>
///   <item><description>Internal Server Error</description></item>
///   <item><description>We had a problem with our server. Try again later.</description></item>
/// </list>
/// <para>
/// {% /table %}
/// </para>
/// <para>
/// ---
/// </para>
/// <para>
/// ## Idempotent Requests
/// </para>
/// <para>
/// The <c>Authorization</c> and <c>Transfer</c> resources both have an <c>idempotency_id</c> field. Use this field to ensure the API Request is performed <b>_only once_</b>.
/// </para>
/// <para>
/// Why is this important? We've all experienced a checkout page that hangs on a request or payment, and feared that if we refresh or submit the payment again, we'd be charged twice.
/// </para>
/// <para>
/// Finix removes this ambiguity with the <c>idempotency_id</c>. You or the user can generate a unique ID that can be included as an <c>idempotency_id</c> with the usual request payload. If anyone attempts a request with the same <c>idempotency_id</c>, the response will raise an exception.
/// </para>
/// <para>
/// By passing an <c>idempotency_id</c> in the body of your requests, you can be rest assured that when you create an <c>Authorization</c> or <c>Transfer</c>, the user will be protected from potential network issues.
/// </para>
/// <para>
/// <c>idempotency_id</c> is available on the following three endpoints:
/// </para>
/// <list type="bullet">
///   <item><description><c>/transfers</c></description></item>
///   <item><description><c>/authorizations</c></description></item>
///   <item><description><c>/transfers/{id}/reversals</c></description></item>
/// </list>
/// <para>
/// {% admonition type="warning" name="<c>idempotency_id</c> scope" %}
/// <c>idempotency_id</c> checks against previous requests made on the same endpoint.
/// {% /admonition %}
/// </para>
/// <para>
/// ---
/// </para>
/// <para>
/// ## Query Parameters
/// </para>
/// <para>
/// Every Finix resource (e.g., <c>Authorizations</c>, <c>Transfers</c>) can be listed and reviewed using <c>GET</c> requests. Every endpoint also has query parameters available to help you filter the resources that are returned.
/// </para>
/// <para>
/// See the following example of how to query the <c>Transfers</c> endpoint for <c>Transfer</c> resources with <c>type: DEBIT</c>.
/// </para>
/// <code>
/// curl "https://finix.sandbox-payments-api.com/transfers?type=DEBIT" \
///     -H "Finix-Version: 2022-02-01" \
///     -u USsRhsHYZGBPnQw8CByJyEQW:8a14c2f9-d94b-4c72-8f5c-a62908e5b30e
/// </code>
/// <para>
/// ---
/// </para>
/// <para>
/// ## Tags
/// </para>
/// <para>
/// Many Finix resources (e.g., <c>Authorization</c>, <c>Transfer</c>) let you include <c>tags</c> to add key-value metadata to your Finix API resources. For example, when creating a Transfer, you might include <c>customerId: Customer123</c> to tag the Transfer with your internal customer ID. You can update tags as many times as needed, as well as filter resources by tags.
/// </para>
/// <code>
/// {
///     ...,
///     "tags": {
///         "card-type": "business card",
///         "order_number": "H-1257",
///         "customer_order_reference": "order1234",
///         "item_type": "hardware",
///         "vendor": "finix"
///     }
/// }
/// </code>
/// <para>
/// The <c>tags</c> object accepts up to 50 <c>key: value</c> pairs to annotate resources with custom metadata.
/// </para>
/// <list type="bullet">
///   <item><description>Maximum character length for individual <c>keys</c> is 40.</description></item>
///   <item><description>Maximum character length for individual <c>values</c> is 500.</description></item>
/// </list>
/// <para>
/// {% admonition type="warning" name="Special Characters" %}
/// Finix does <b>_not_</b> allow special characters on tags (e.g., <c>\</c>, <c>,</c>, <c>"</c>, <c>'</c>)
/// {% /admonition %}
/// </para>
/// <para>
/// ---
/// </para>
/// <para>
/// ## Versioning
/// </para>
/// <para>
/// As Finix improves our products and features, we will make changes to our APIs. When breaking changes are made to Finix's API, we may release a new dated API version.
/// </para>
/// <para>
/// The API version your requests use controls how API responses and webhooks behave (for example, the values you see in responses and the parameters you can include in requests). For more information, see <see href="/additional-resources/developers/authentication-and-api-basics/versioning/">Versioning</see>.
/// </para>
/// <para>
/// &lt;br/&gt;
/// </para>
/// <para>
/// ---
/// </para>
/// <para>
/// ## Postman Collection
/// </para>
/// <para>
/// Finix has a Postman collection to help in your development. You can fork it using the button below.
/// </para>
/// <para>
/// <see href="https://god.gw.postman.com/run-collection/47694266-26c1778a-64ad-473d-ba6f-440777f2c9c8?action=collection%2Ffork&amp;source=rip_markdown&amp;collection-url=entityId%3D47694266-26c1778a-64ad-473d-ba6f-440777f2c9c8%26entityType%3Dcollection%26workspaceId%3D72d1f1c9-5637-4a7f-be9b-25fc89a3a2ff">&lt;img id="postman-btn" src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;"&gt;</see>
/// </para>
/// </summary>
public sealed class FinixApiReferenceClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public FinixApiReferenceClient(HttpClient httpClient, FinixApiReferenceClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "FinixApiReferenceClient/1.0 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "1.0"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("FINIX_API_REFERENCE_LOG"),
            "FinixApiReferenceClient",
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
        _auth = new AuthSchemes(options);
    }

    /// <summary>
    /// A <c>3D Secure Session</c> represents one 3D Secure authentication that Finix runs on a card. Create the session, send the buyer through authentication, then reference the completed session when you create the <see href="/api/transfers">Transfer</see> or <see href="/api/authorizations">Authorization</see>.
    /// <para>
    /// The <c>state</c> of a session describes the authentication process, not its outcome. A session where the buyer was never authenticated still ends in <c>SUCCEEDED</c>. To find out whether the buyer was authenticated, and where chargeback liability sits, read <c>3d_secure_authentication.electronic_commerce_indicator</c>.
    /// </para>
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/online-payments/fraud-and-risk/3d-secure">3D Secure</see>
    /// </para>
    /// </summary>
    public DSecureSessions3 DSecureSessions3 => field ??= new DSecureSessions3(_rawClient, _server, _auth);

    /// <summary>
    /// An <c>Authorization</c> (also known as a card hold) reserves a specific amount on a card to be captured (i.e. debited) at a later date, usually within seven days. When an <c>Authorization</c> is captured it produces a <c>Transfer</c> resource.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/online-payments/payment-features/auth-and-captures">Auth and Captures</see>
    /// - <see href="/guides/online-payments/payment-features/level-2-level-3-processing/">Level 2 and 3 Processing</see>
    /// - <see href="/guides/in-person-payments/building-your-integration/pos-integration">POS Integration</see>
    /// - <see href="/guides/online-payments/payment-features/buyer-charges/">Buyer Charges</see>
    /// </para>
    /// </summary>
    public AuthorizationsApi AuthorizationsApi => field ??= new AuthorizationsApi(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>Balance Adjustment</c> modifies the account <c>Balance</c> by adding funds (a 'top-up') or reducing funds for Payouts. Each adjustment is linked to a specific payment rail (e.g., ACH, card, wire).
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/payouts/adding-funds">Adding Funds to your Finix Balance</see>
    /// </para>
    /// </summary>
    public BalanceAdjustments BalanceAdjustments => field ??= new BalanceAdjustments(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>Balance</c> resource represents the current financial state of an <c>Application</c> identified by the <c>linked_to</c> query parameter.
    /// <para>
    /// It tracks the state of funds processed through the system, including amounts that are:
    ///   - <c>available_amount</c> for immediate use or disbursement.
    ///   - <c>pending_amount</c> due to processing times, holds, or other constraints.
    ///   - <c>posted_amount</c>, which reflects the total sum (including both available and pending funds).
    /// </para>
    /// </summary>
    public Balances Balances => field ??= new Balances(_rawClient, _server, _auth);

    /// <summary>
    /// To process payments, your Merchants must validate their compliance with PCI DSS requirements annually. To do this, your Merchants must attest to PCI Self-Assessment Questionnaire (SAQ) compliance forms.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/managing-operations/security-compliance/managing-pci-compliance">Managing PCI Compliance</see>
    /// - <see href="/guides/managing-operations/security-compliance/pci-dss-compliance">PCI DSS Compliance</see>
    /// </para>
    /// </summary>
    public ComplianceForms ComplianceForms => field ??= new ComplianceForms(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>Device</c> resource represents a Point-of-Sale terminal. Devices are used for <see href="/guides/in-person-payments">In-Person transactions</see>.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/in-person-payments">In-Person Payments</see>
    /// </para>
    /// </summary>
    public Devices Devices => field ??= new Devices(_rawClient, _server, _auth);

    /// <summary>
    /// For the Payouts product, when a payout is executed, such as a Push-To-Card or ACH transaction, Finix checks the transaction against velocity rules and balance rules.
    /// <para>
    /// Rules establish limits on transactions. For example, there may be a daily transaction limit of 100 transactions (<c>count_limit</c>) or a monthly volume limit of $100,000 (<c>volume_limit</c>). If a transaction exceeds any defined limit, the transaction is rejected.
    /// </para>
    /// <para>
    /// Rules are set for entities involved in transactions, including the application, senders, and recipients.
    /// </para>
    /// <para>
    /// The "Application" represents the customer to whom Finix is applying the rules. Application rules are set solely by Finix and are applied to every single transaction.
    /// </para>
    /// <para>
    /// You can establish rules for "senders" and "recipients," referring to the parties involved in transactions:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>In the case of a <c>PULL_FROM_CARD</c> or <c>PULL_FROM_ACH</c> transaction, sender rules are applied (either card or ACH rules). The "target" of the pull is referred to as the "sender," specifically the customer of Finix's client.</description></item>
    ///   <item><description>Conversely, in the case of a <c>PUSH_TO_CARD</c> or <c>PUSH_TO_ACH</c> transaction, the recipient rules are applied (either card or ACH rules). The "target" of the push is referred to as the "recipient," which is, in turn, the customer of Finix's client.</description></item>
    /// </list>
    /// </summary>
    public DisbursementRules DisbursementRules => field ??= new DisbursementRules(_rawClient, _server, _auth);

    /// <summary>
    /// Disputes, also known as chargebacks, are customer-disputed charges. A core part of the dispute lifecycle is the ability for a <c>Merchant</c> to upload evidence supporting their side.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/after-the-payment/disputes">Managing Disputes</see>
    /// </para>
    /// </summary>
    public DisputesApi DisputesApi => field ??= new DisputesApi(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>fee_profiles</c> represents a pricing scheme that automatically applies fees to each transaction. Changes to <c>fee_profiles</c> go into effect immediately.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/platform-payments/monetizing-payments/merchant-fee-profiles">Merchant Fee Profiles</see>
    /// </para>
    /// </summary>
    public FeeProfiles FeeProfiles => field ??= new FeeProfiles(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>Fee</c> is a charge levied against a <c>Merchant</c>. It represents how a platform charges its sellers for all various types of Fees.
    /// </summary>
    public FeesApi FeesApi => field ??= new FeesApi(_rawClient, _server, _auth);

    /// <summary>
    /// Use Finix's File API to upload and manage files for your merchants.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-uploading-files.md">File Uploads</see>
    /// - <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-update-requests.md">Update Requests</see>
    /// </para>
    /// </summary>
    public FilesApi FilesApi => field ??= new FilesApi(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>Gateway Integration</c> represents a connection to a third-party payment gateway. At this time, the only supported gateway is Cybersource.
    /// <para>
    /// Cybersource is a Visa-owned payment gateway that integrates with Finix to provide secure payment processing and fraud management. Finix handles merchant onboarding and payouts through a unified API, while Cybersource manages gateway routing and fraud prevention for global card acceptance.
    /// </para>
    /// </summary>
    public GatewayIntegrations GatewayIntegrations => field ??= new GatewayIntegrations(_rawClient, _server, _auth);

    /// <summary>
    /// An <c>Identity</c> resource represents either a person or business in Finix. You'll create an <c>Identity</c> to onboard your sellers, and verify the different owners.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/getting-started">Getting Started</see>
    /// - <see href="/guides/platform-payments/onboarding-sellers">Onboarding Sellers</see>
    /// - <see href="/guides/payouts/card-payouts/">Push to Card</see>
    /// </para>
    /// </summary>
    public Identities Identities => field ??= new Identities(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>Merchant</c> resource represents the entity's merchant account on a processor. Your <c>Merchant</c> must be <c>APPROVED</c> to process payments.
    /// <para>
    /// <b>Related Guides:</b>
    /// </para>
    /// <list type="bullet">
    ///   <item><description><see href="/guides/getting-started">Getting Started</see></description></item>
    ///   <item><description><see href="/guides/platform-payments/onboarding-sellers">Onboarding Sellers</see></description></item>
    /// </list>
    /// </summary>
    public MerchantsApi MerchantsApi => field ??= new MerchantsApi(_rawClient, _server, _auth);

    /// <summary>
    /// A Microdeposit represents the $0.01 verification deposit Finix sends to a bank account when microdeposit verification is required. The deposit's statement descriptor carries the code the account owner submits to verify the bank account.
    /// <para>
    /// You may check a verification's status, remaining submission tries, and expiration. The verification code is never returned by the API. The account owner must read it from their bank statement.
    /// </para>
    /// <para>
    /// For more information, see <see href="/guides/online-payments/bank-payments/microdeposit-verification">Microdeposit verification</see>.
    /// </para>
    /// </summary>
    public Microdeposits Microdeposits => field ??= new Microdeposits(_rawClient, _server, _auth);

    /// <summary>
    /// Finix offers and hosts pre-built onboarding forms that you can use to collect onboarding and identity verification information from your users.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-via-api">Onboarding via the API</see>
    /// </para>
    /// </summary>
    public OnboardingForms OnboardingForms => field ??= new OnboardingForms(_rawClient, _server, _auth);

    /// <summary>
    /// In Finix, <c>Payment Instruments</c> are tied to the owner of that account. For example, <c>Payment Instruments</c> tied to buyer will be the cards used for purchases while <c>Payment Instruments</c> tied to a <c>Merchant</c> are the bank accounts where they receive settlements.
    /// <para>
    /// Therefore when billing events occur that are tied to a buyer's <c>Payment Instrument</c> (e.g. enrolling in account updater, using Plaid for tokenization, etc) Finix cannot automatically map those fees to a specific <c>Merchant</c>. By default, these costs are instead charged to your <c>Application</c> (e.g. the Platform, Marketplace, Vertical Saas owner's account) and will be deducted from your residual. If you wish to monetize these offerings or pass the fees on to your <c>Merchant</c> you must explicitly link the buyers <c>Payment Instrument</c> to a <c>Merchant</c> resource using the <c>Payment Instrument Association</c>
    /// </para>
    /// </summary>
    public PaymentInstrumentAssociations PaymentInstrumentAssociations =>
        field ??= new PaymentInstrumentAssociations(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>Payment Instrument</c> resource represents the payment details of a credit card or bank account. Payment details get tokenized multiple times and each tokenization produces a unique <c>Payment Instrument</c>.
    /// <para>
    /// A <c>Payment Instrument</c> is associated with a single <see href="#Identities"><c>Identity</c></see>. Once a <c>Payment Instrument</c> is created, the <c>Identity</c> it's associated with can't be changed.
    /// </para>
    /// <para>
    /// Including an address when creating a <c>Payment Instrument</c> can lower interchange on credit card transactions.
    /// </para>
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/online-payments/payment-tokenization/tokenization-forms">Using Hosted Fields</see>
    /// - <see href="/guides/getting-started">Getting Started</see>
    /// </para>
    /// </summary>
    public PaymentInstrumentsApi PaymentInstrumentsApi =>
        field ??= new PaymentInstrumentsApi(_rawClient, _server, _auth);

    /// <summary>
    /// The <c>Receipt</c> resource generates a receipt for <see href="#Transfers">Transfers</see> or <see href="#Authorizations">Authorizations</see>. You can then send the <c>Receipt</c> via Email, SMS, or use the information from the <c>Receipt</c> to send it yourself.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/online-payments/payment-features/sending-receipts">Receipts for Online Payments</see>
    /// </para>
    /// </summary>
    public Receipts Receipts => field ??= new Receipts(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>Settlement Queue Entry</c> resource represents an entry in the settlement queue used to track when and how a transfer is queued to be processed.
    /// <para>
    /// If a merchant's <c>settlement_queue_mode</c> is set to <c>MANUAL</c>, all transfers will have a <c>Settlement Queue Entry</c> created and will not be placed into settlement until the <see href="/api/settlement-queue-entries/updatesettlementqueueentries">Settlement Queue Entry is explicitly released</see>.
    /// </para>
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/additional-resources/developers/resources-and-payment-flows/key-resources#settlements">Account Structures and Settlements</see>
    /// </para>
    /// </summary>
    public SettlementQueueEntries SettlementQueueEntries =>
        field ??= new SettlementQueueEntries(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>Settlement</c> represents a collection (i.e. batch) of Settlement Entries that will get paid out to a specific <see href="/api/merchants">Merchant</see>. A <c>Settlement Entry</c> can represent a <see href="/api/transfers">Transfer</see>, custom <see href="/api/fees">Fee</see>, or <see href="/api/split-transfers">Split Transfer</see>.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/payouts">Payouts</see>
    /// </para>
    /// </summary>
    public SettlementsApi SettlementsApi => field ??= new SettlementsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Transactions can be split among different merchants. A <c>Split Transfer</c> shows how funds from a split <c>Transfer</c> were distributed into a merchant's <c>Settlement</c>.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/online-payments/payment-features/split-transactions">Split Transactions</see>
    /// </para>
    /// </summary>
    public SplitTransfers SplitTransfers => field ??= new SplitTransfers(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>Subscription Plan</c> resource is a template with set recurring costs and frequencies that can be reused across multiple <c>Subscription</c> resources.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/subscriptions/subscription-plans">Creating Subscriptions Plans</see>
    /// - <see href="/guides/subscriptions">Creating Subscriptions</see>
    /// - <see href="/guides/subscriptions/recurring-payment-guidelines">Recurring Payments Guidelines</see>
    /// </para>
    /// </summary>
    public SubscriptionPlans SubscriptionPlans => field ??= new SubscriptionPlans(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>Subscription</c> resource represents a recurring charge to a <c>Payment Instrument</c> at regular intervals. Subscribers can be buyers, customers, or merchants.
    /// <para>
    /// Subscriptions are supported for USA and Canadian merchants.
    /// </para>
    /// <para>
    /// When creating a <c>Subscription</c>, you have the option to use a <c>Subscription Plan</c>.
    /// </para>
    /// <para>
    /// <b>Limitations</b>:
    /// - *Supported countries*: Subscriptions are available in the United States and Canada.&lt;br&gt;
    /// - *Supported payment methods*: Subscriptions currently support recurring card payments and recurring bank account payments (&lt;a href="/guides/online-payments/bank-payments/ach-direct-debits"&gt;ACH&lt;/a&gt; in the USA).&lt;br&gt;
    /// - *Approved merchants*: At this time, only approved merchants with one of the following processors can create subscriptions: <c>DUMMY_V1</c> and <c>FINIX_V1</c>.&lt;br&gt;&lt;br&gt;
    /// </para>
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/subscriptions">Creating Subscriptions</see>
    /// - <see href="/guides/subscriptions/subscription-plans">Creating Subscription Plans</see>
    /// - <see href="/guides/subscriptions/recurring-payment-guidelines">Recurring Payments Guidelines</see>
    /// </para>
    /// </summary>
    public Subscriptions Subscriptions => field ??= new Subscriptions(_rawClient, _server, _auth);

    /// <summary>
    /// When a user attempts to make a payment using a Checkout Form or <see href="/low-code-no-code/payment-links">Payment Link</see>, or a recipient submitting details with a <see href="/guides/payouts/payout-links">Payout Link</see>—a Transfer Attempt is created.
    /// <para>
    /// Using transfer attempts, you can track the lifecycle of a payment or a series of payments if you are using a multi-use Payment Link.
    /// </para>
    /// <para>
    /// Checkout Forms and Payment Links support authorizations. If a payment made with them is an authorization, the Transfer Attempt result shows <c>is_authorization: true</c> and references the authorization (<c>authorization_id</c>).
    /// </para>
    /// <para>
    /// Each Transfer Attempt has as reference to a <c>transfer_id</c> to allow you to query it for additional data.
    /// </para>
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/low-code-no-code/manage-low-code-no-code/transfer-attempts">Transfer Attempts</see>
    /// </para>
    /// </summary>
    public TransferAttempts TransferAttempts => field ??= new TransferAttempts(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>Transfer</c> represents any flow of funds either to or from a <c>Payment Instrument</c>. All payments in Finix are represented by a <c>Transfer</c>.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/online-payments/online-payments-quickstart">Online Payments Quickstart</see>
    /// - <see href="/guides/online-payments/payment-features/level-2-level-3-processing/">Level 2 and 3 Processing</see>
    /// - <see href="/guides/in-person-payments/building-your-integration/pos-integration">POS Integration</see>
    /// - <see href="/guides/online-payments/payment-features/buyer-charges/">Buyer Charges</see>,
    /// - <see href="/guides/online-payments/bank-payments/ach-direct-debits">ACH (eCheck) Direct Debit</see>
    /// </para>
    /// </summary>
    public TransfersApi TransfersApi => field ??= new TransfersApi(_rawClient, _server, _auth);

    /// <summary>
    /// A <c>User</c> resource represents a pair of API keys which are used to perform authenticated requests against the Finix API. When making authenticated requests via HTTP basic access authentication the ID of a <c>User</c> resource maps to the username, while the <c>password</c> corresponds to the password (i.e. secret key).
    /// <para>
    /// The password field for a <c>User</c> resource is only returned during the initial creation. Any following GET requests to the resource returns the <c>password</c> field as <b>null</b> for security purposes.
    /// </para>
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/additional-resources/developers/resources-and-payment-flows/key-resources#account-structure">Account Structure</see>
    /// </para>
    /// </summary>
    public Users Users => field ??= new Users(_rawClient, _server, _auth);

    /// <summary>
    /// <c>Verifications</c> are used to verify <see href="/api/merchants">Merchants</see> and <see href="/api/payment-instruments">Payment Instruments</see>.
    /// <para>
    /// For <c>Merchants</c>, a verification represents an attempt to onboard and underwrite a Merchant.
    /// </para>
    /// <para>
    /// For <c>Payment Instruments</c>, a verification represents getting additional information from the card brands to verify a card is eligible for push to card.
    /// </para>
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/guides/platform-payments/onboarding-sellers/seller-onboarding-via-api">Onboarding with the API</see>
    /// - <see href="/guides/payouts/card-payouts">Push to Card</see>
    /// </para>
    /// </summary>
    public VerificationsApi VerificationsApi => field ??= new VerificationsApi(_rawClient, _server, _auth);

    /// <summary>
    /// Webhooks let you set up integrations that subscribe to automated notifications (events) on the Finix API. When an enabled event occurs, Finix sends an HTTP POST payload to the <c>Webhook</c>'s configured URL.
    /// <para>
    /// <b>Related Guides:</b>
    /// - <see href="/additional-resources/developers/webhooks">Webhooks</see>
    /// - <see href="/additional-resources/developers/webhooks/integrating-into-webhooks">Integrating Webhooks</see>
    /// - <see href="/additional-resources/developers/webhooks/webhook-events">Webhook Events</see>
    /// </para>
    /// </summary>
    public WebhooksApi WebhooksApi => field ??= new WebhooksApi(_rawClient, _server, _auth);

    /// <summary>
    /// Verify an Identity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateIdentityVerificationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Verify an <c>Identity</c>.
    /// </remarks>
    public Task CreateIdentityVerification(CreateIdentityVerificationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/identities/{identity_id}/verifications"),
            [new TemplateParam("identity_id", request.IdentityId)],
            [],
            [
                new HeaderParam("Finix-Version", request.FinixVersion),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            CreateIdentityVerificationError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
