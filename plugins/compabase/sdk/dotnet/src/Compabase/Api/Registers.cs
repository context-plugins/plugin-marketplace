using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Compabase.Core;
using Compabase.Core.Authentication;
using Compabase.Core.Exceptions;
using Compabase.Core.Models;
using Compabase.Core.Request;
using Compabase.Core.Response;
using Compabase.Errors;
using Compabase.Models;
using Compabase.Requests.Registers;

namespace Compabase.Api;

/// <summary>
/// Public-register data of one company (CRBR, MSiG, KRZ, URE, BDO, SUDOP, KNF, FE, FTS, BZP/TED, NFZ contracts and waiting lists, sanctions and PEP lists, Warsaw Stock Exchange, real estate, secured liabilities, website facts).
/// </summary>
public sealed class Registers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Registers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// NFZ waiting lists by NIP
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCeidgNipByNipNfzQueuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// NFZ (National Health Fund) waiting lists of a healthcare provider by NIP (sole proprietors and any other provider) from the NFZ "Terminy leczenia" API: every NFZ-funded
    /// service it runs a waiting list for, per location — NFZ forecast waiting time (stable and urgent case), people waiting,
    /// average wait, address, phone, children, accessibility. Sorted by shortest wait. Refreshed twice a week.
    /// The forecast is not a booking. Same data as MCP <c>get_company_nfz_queues</c>.
    /// </remarks>
    public Task<object> GetCeidgNipByNipNfzQueues(GetCeidgNipByNipNfzQueuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ceidg/nip/{nip}/nfz-queues"),
            [new TemplateParam("nip", request.Nip)],
            [new Param("service", request.Service), new Param("town", request.Town), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCeidgNipByNipNfzQueuesError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Public procurement counterparties by NIP
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCeidgNipByNipProcurementCounterpartiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Buyers, contractors and consortium partners of a company or a sole proprietor (public CEIDG profile) by NIP, from BZP,
    /// TED and CRU. Same data as MCP <c>get_company_procurement_counterparties</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<object> GetCeidgNipByNipProcurementCounterparties(GetCeidgNipByNipProcurementCounterpartiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ceidg/nip/{nip}/procurement-counterparties"),
            [new TemplateParam("nip", request.Nip)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCeidgNipByNipProcurementCounterpartiesError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facts from the website by NIP
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCeidgNipByNipWebsiteFactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Same as <c>/companies/krs/{krs}/website-facts</c> for sole proprietors with a public profile (and any company) by NIP.
    /// Same data as MCP <c>get_company_website_facts</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<object> GetCeidgNipByNipWebsiteFacts(GetCeidgNipByNipWebsiteFactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ceidg/nip/{nip}/website-facts"),
            [new TemplateParam("nip", request.Nip)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCeidgNipByNipWebsiteFactsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Beneficial owners (CRBR)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsBeneficiariesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsBeneficiariesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Beneficial owners of a KRS company from the Central Register of Beneficial Owners (CRBR) — name, nationality,
    /// country of residence and nature/extent of control. PESEL is never returned (birth year only). Sole proprietors are not in CRBR.
    /// Same data as MCP <c>get_company_beneficiaries</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsBeneficiariesResponse> GetCompaniesKrsByKrsBeneficiaries(GetCompaniesKrsByKrsBeneficiariesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/beneficiaries"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsBeneficiariesResponse>(),
            GetCompaniesKrsByKrsBeneficiariesError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Court and Commercial Gazette notices (MSiG)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsCourtGazetteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsCourtGazetteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Notices about the company published in the Court and Commercial Gazette (Monitor Sądowy i Gospodarczy) —
    /// creditor calls, dissolution, mergers, liquidation, transformations — matched by KRS or NIP.
    /// Same data as MCP <c>get_company_court_gazette</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsCourtGazetteResponse> GetCompaniesKrsByKrsCourtGazette(GetCompaniesKrsByKrsCourtGazetteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/court-gazette"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsCourtGazetteResponse>(),
            GetCompaniesKrsByKrsCourtGazetteError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Energy concessions (URE)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsEnergyLicensesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsEnergyLicensesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Energy Regulatory Office (URE) concessions — electricity, gas, heat and liquid fuels — with validity dates and
    /// pending applications. Keyed by the company's NIP.
    /// Same data as MCP <c>get_company_energy_licenses</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsEnergyLicensesResponse> GetCompaniesKrsByKrsEnergyLicenses(GetCompaniesKrsByKrsEnergyLicensesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/energy-licenses"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsEnergyLicensesResponse>(),
            GetCompaniesKrsByKrsEnergyLicensesError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// European Funds projects (FE)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsEuFundsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsEuFundsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// EU cohesion-fund projects (Fundusze Europejskie, official MFiPR project lists) — programme, EU co-financing,
    /// total value and dates. Keyed by NIP. Not TED procurement, not FTS Commission grants, not SUDOP state aid.
    /// Same data as MCP <c>get_company_eu_funds</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsEuFundsResponse> GetCompaniesKrsByKrsEuFunds(GetCompaniesKrsByKrsEuFundsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/eu-funds"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsEuFundsResponse>(),
            GetCompaniesKrsByKrsEuFundsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// European Commission grants (FTS)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsEuGrantsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsEuGrantsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// European Commission Financial Transparency System awards — Horizon, LIFE, Erasmus+ and other direct/indirect
    /// management grants and contracts. Keyed by NIP (VAT).
    /// Same data as MCP <c>get_company_procurement</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsEuGrantsResponse> GetCompaniesKrsByKrsEuGrants(GetCompaniesKrsByKrsEuGrantsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/eu-grants"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsEuGrantsResponse>(),
            GetCompaniesKrsByKrsEuGrantsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Financial statement filing timeliness
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsFilingTimelinessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsFilingTimelinessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// For each recent financial year: period end, the date the annual financial statement was filed (KRS register
    /// entries and the Financial Document Repository), the statutory deadline (year end + 6 months + 15 days; +3 months
    /// for 2019–2020), days late or not filed, and whether a statutory auditor's report was filed. Also <c>overdue_year</c>
    /// when the latest statement is past its deadline and missing.
    /// Same data as MCP <c>get_company_filing_timeliness</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsFilingTimelinessResponse> GetCompaniesKrsByKrsFilingTimeliness(GetCompaniesKrsByKrsFilingTimelinessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/filing-timeliness"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsFilingTimelinessResponse>(),
            GetCompaniesKrsByKrsFilingTimelinessError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Financial supervision entries (KNF)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsFinancialLicensesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsFinancialLicensesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Polish Financial Supervision Authority (KNF) registers — licences and entries of banks, payment / e-money
    /// institutions, investment firms, insurers, lending institutions and agents, with KNF number, status, registration,
    /// decision and strike-off dates and services. Keyed by NIP.
    /// Same data as MCP <c>get_company_financial_supervision</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsFinancialLicensesResponse> GetCompaniesKrsByKrsFinancialLicenses(GetCompaniesKrsByKrsFinancialLicensesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/financial-licenses"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsFinancialLicensesResponse>(),
            GetCompaniesKrsByKrsFinancialLicensesError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Warsaw Stock Exchange (GPW)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsGpwError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Listing snapshot for a KRS company matched to GPW Main Market, NewConnect, or GlobalConnect:
    /// ticker, ISIN, last close and change, market cap, shares, EPS, P/E, dividend and yield,
    /// plus a few recent daily bars. Quotes delayed ~15 minutes, in PLN.
    /// <para>
    /// Not an official GPW licensed feed. <c>gpw</c> is <c>null</c> when the company is not listed / not matched.
    /// </para>
    /// <para>
    /// Optional history (still capped — never the full MAX chart):
    /// - <c>include=series</c> — daily OHLCV, default 250 bars, max 2000 (<c>series_limit</c>)
    /// - <c>include=intraday</c> — 1-minute bars for the last 10 calendar days
    /// - combine as <c>include=series,intraday</c>
    /// </para>
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrsGpw(GetCompaniesKrsByKrsGpwRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/gpw"),
            [new TemplateParam("krs", request.Krs)],
            [new Param("include", request.Include), new Param("series_limit", request.SeriesLimit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsGpwError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Insolvency and restructuring proceedings (KRZ)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsInsolvencyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsInsolvencyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bankruptcy and restructuring proceedings from the National Debtor Register (Krajowy Rejestr Zadłużonych, KRZ):
    /// case numbers, court, proceeding type and status, key dates.
    /// Same data as MCP <c>get_company_debt_registry</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsInsolvencyResponse> GetCompaniesKrsByKrsInsolvency(GetCompaniesKrsByKrsInsolvencyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/insolvency"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsInsolvencyResponse>(),
            GetCompaniesKrsByKrsInsolvencyError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// NFZ contracts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsNfzContractsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// NFZ (National Health Fund) contracts of a healthcare provider — contract value per year since 2008, types of care
    /// with NFZ branch and the largest contracts (PLN). Keyed by the company's NIP. Same data as MCP <c>get_company_nfz_contracts</c>.
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrsNfzContracts(GetCompaniesKrsByKrsNfzContractsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/nfz-contracts"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsNfzContractsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// NFZ waiting lists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsNfzQueuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// NFZ (National Health Fund) waiting lists of a healthcare provider from the NFZ "Terminy leczenia" API: every NFZ-funded
    /// service it runs a waiting list for, per location — NFZ forecast waiting time (stable and urgent case), people waiting,
    /// average wait, address, phone, children, accessibility. Sorted by shortest wait. Refreshed twice a week.
    /// The forecast is not a booking. Same data as MCP <c>get_company_nfz_queues</c>.
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrsNfzQueues(GetCompaniesKrsByKrsNfzQueuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/nfz-queues"),
            [new TemplateParam("krs", request.Krs)],
            [new Param("service", request.Service), new Param("town", request.Town), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsNfzQueuesError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Public procurement counterparties
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsProcurementCounterpartiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsProcurementCounterpartiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Buyers the company most often wins public contracts from, contractors it most often awards contracts to, and
    /// consortium partners — from BZP, TED and CRU. Each with KRS (when known), number of contracts, total value
    /// (PLN/EUR/USD) and years; top 20 per role plus totals.
    /// Same data as MCP <c>get_company_procurement_counterparties</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsProcurementCounterpartiesResponse> GetCompaniesKrsByKrsProcurementCounterparties(GetCompaniesKrsByKrsProcurementCounterpartiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/procurement-counterparties"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsProcurementCounterpartiesResponse>(),
            GetCompaniesKrsByKrsProcurementCounterpartiesError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Public aid received (SUDOP)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsPublicAidResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsPublicAidError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Public aid and de minimis aid from SUDOP (UOKiK) — full case list with amount, grantor, aid measure, purpose and
    /// date. Keyed by NIP.
    /// Same data as MCP <c>get_company_public_aid</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsPublicAidResponse> GetCompaniesKrsByKrsPublicAid(GetCompaniesKrsByKrsPublicAidRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/public-aid"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsPublicAidResponse>(),
            GetCompaniesKrsByKrsPublicAidError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Real estate (financial statements)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsRealEstateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsRealEstateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Company real estate from the latest financial statement (period ending 2025+): land incl. perpetual usufruct,
    /// buildings and premises, investment property (book values in PLN/EUR/USD), plus properties named as mortgage
    /// collateral (address, land-register KW numbers, creditor). Micro and small entities have no such breakdown.
    /// Same data as MCP <c>get_company_real_estate</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsRealEstateResponse> GetCompaniesKrsByKrsRealEstate(GetCompaniesKrsByKrsRealEstateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/real-estate"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsRealEstateResponse>(),
            GetCompaniesKrsByKrsRealEstateError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// MSWiA sanctions listing
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsSanctionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsSanctionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Official Polish Ministry of the Interior and Administration (MSWiA) sanctions listing
    /// for a KRS company matched by KRS, NIP, or REGON.
    /// <para>
    /// <c>sanctions</c> is <c>null</c> when the company is not on the list. When present, <c>entries</c>
    /// include the name on the list, listed and removed dates, restrictive measures, and
    /// the legal grounds. Polish text stays in <c>measures</c> / <c>justification</c>; English and
    /// German are in <c>measures_i18n</c> / <c>justification_i18n</c>.
    /// </para>
    /// </remarks>
    public Task<CompaniesKrsSanctionsResponse> GetCompaniesKrsByKrsSanctions(GetCompaniesKrsByKrsSanctionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/sanctions"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsSanctionsResponse>(),
            GetCompaniesKrsByKrsSanctionsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Secured liabilities (mortgages and pledges)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsSecuredLiabilitiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsSecuredLiabilitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Secured liabilities disclosed in the notes to the latest financial statement (period ending 2025+): mortgages,
    /// registered / financial pledges, transfers of ownership, assignments — with creditor, amount, secured debt, asset and
    /// land-register (KW) numbers.
    /// Same data as MCP <c>get_company_secured_liabilities</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsSecuredLiabilitiesResponse> GetCompaniesKrsByKrsSecuredLiabilities(GetCompaniesKrsByKrsSecuredLiabilitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/secured-liabilities"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsSecuredLiabilitiesResponse>(),
            GetCompaniesKrsByKrsSecuredLiabilitiesError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Public procurement of a company (BZP + TED)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsTendersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsTendersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Public procurement of one company: national tenders from the Public Procurement Bulletin (BZP) and EU-threshold
    /// tenders from TED — as contractor (awards won) and as contracting authority. Returns <c>national</c> and <c>eu</c> blocks.
    /// Same data as MCP <c>get_company_public_tenders / get_company_eu_tenders</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsTendersResponse> GetCompaniesKrsByKrsTenders(GetCompaniesKrsByKrsTendersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/tenders"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsTendersResponse>(),
            GetCompaniesKrsByKrsTendersError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Waste and packaging register (BDO)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompaniesKrsWasteRegistryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsWasteRegistryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// BDO register (waste, products and packaging) — registration number, number of sites, activity flags and decisions
    /// with issue and validity dates. Keyed by NIP.
    /// Same data as MCP <c>get_company_waste_registry</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<CompaniesKrsWasteRegistryResponse> GetCompaniesKrsByKrsWasteRegistry(GetCompaniesKrsByKrsWasteRegistryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/waste-registry"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompaniesKrsWasteRegistryResponse>(),
            GetCompaniesKrsByKrsWasteRegistryError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facts from the company website
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsWebsiteFactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Opening hours, branches, offer (CPV divisions and product/service names in PL/EN/DE), certifications, website
    /// technology and clients/partners linked from the site (matched to KRS companies), read from the company's own website.
    /// Same data as MCP <c>get_company_website_facts</c>. One request = one API call from the monthly quota.
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrsWebsiteFacts(GetCompaniesKrsByKrsWebsiteFactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/website-facts"),
            [new TemplateParam("krs", request.Krs)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsWebsiteFactsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
