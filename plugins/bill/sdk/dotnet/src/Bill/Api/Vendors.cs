using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core;
using Bill.Core.Authentication;
using Bill.Core.Exceptions;
using Bill.Core.Models;
using Bill.Core.Request;
using Bill.Core.Response;
using Bill.Errors;
using Bill.Models;
using Bill.Requests.Vendors;

namespace Bill.Api;

public sealed class Vendors
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Vendors(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive a vendor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveVendorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing vendor. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// <para>
    /// You can restore an archived vendor with <c>POST /v3/vendors/{vendorId}/restore</c>. There is no change when you archive an archived vendor.
    /// </para>
    /// </remarks>
    public Task<VendorResponseDto> ArchiveVendor(ArchiveVendorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendors/{vendorId}/archive"),
            [new TemplateParam("vendorId", request.VendorId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<VendorResponseDto>(),
            ArchiveVendorError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create multiple vendors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkVendorResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBulkVendorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple vendors with one API request. You can create up to 20 vendors with one <c>POST /v3/vendors/bulk</c> request.
    /// <para>
    /// In your bulk vendor creation request, all your vendors must be successfully created for a successful response. If any vendor creation is not successful, the entire request fails and none of the vendors in the request are created.
    /// </para>
    /// <para>
    /// ### Requirements for enabling vendor payments
    /// </para>
    /// <para>
    /// Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL network.
    /// * <c>line1</c>
    /// * <c>city</c>
    /// * <c>zipOrPostalCode</c>
    /// * <c>country</c>
    /// * <c>payeeName</c>
    /// </para>
    /// <para>
    /// <b>Note</b>: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL network. See Virtual card FAQ in the BILL Help Center for more information.
    /// </para>
    /// <para>
    /// ### Requirements for enabling electronic payments to vendors
    /// </para>
    /// <para>
    /// Vendor bank account details are required for paying a vendor with electronic payment methods.
    /// </para>
    /// <para>
    /// <c>paymentInformation</c> details about bank accounts are required for adding a vendor bank account.
    /// * <c>payeeName</c>
    /// * <c>bankCountry</c> (for international vendors)
    /// * <c>paymentCurrency</c> (for international vendors)
    /// * <c>nameOnAccount</c>
    /// * <c>accountNumber</c>
    /// * <c>routingNumber</c> (empty for an IBAN <c>accountNumber</c>)
    /// * <c>type</c> (for international vendors)
    /// </para>
    /// <para>
    /// <c>regulatoryFields</c> and <c>paymentPurpose</c> are additional required fields for enabling electronic payments to international vendors (not United States) in specific countries.
    /// </para>
    /// <para>
    /// <b>Note</b>: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a <c>processDate</c> that is 2 business days from the current date.
    /// </para>
    /// <para>
    /// See Vendors in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<BulkVendorResponseDto> CreateBulkVendor(CreateBulkVendorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendors/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkVendorResponseDto>(),
            CreateBulkVendorError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a vendor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateVendorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new vendor.
    /// <para>
    /// ### Requirements for enabling vendor payments
    /// </para>
    /// <para>
    /// Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL network.
    /// * <c>line1</c>
    /// * <c>city</c>
    /// * <c>zipOrPostalCode</c>
    /// * <c>country</c>
    /// * <c>payeeName</c>
    /// </para>
    /// <para>
    /// <b>Note</b>: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL network. See Virtual card FAQ in the BILL Help Center for more information.
    /// </para>
    /// <para>
    /// ### Requirements for enabling electronic payments to vendors
    /// </para>
    /// <para>
    /// Vendor bank account details are required for paying a vendor with electronic payment methods.
    /// </para>
    /// <para>
    /// <c>paymentInformation</c> details about bank accounts are required for adding a vendor bank account.
    /// * <c>payeeName</c>
    /// * <c>bankCountry</c> (for international vendors)
    /// * <c>paymentCurrency</c> (for international vendors)
    /// * <c>nameOnAccount</c>
    /// * <c>accountNumber</c>
    /// * <c>routingNumber</c> (empty for an IBAN <c>accountNumber</c>)
    /// * <c>type</c> (for international vendors)
    /// </para>
    /// <para>
    /// <c>regulatoryFields</c> and <c>paymentPurpose</c> are additional required fields for enabling electronic payments to international vendors (not United States) in specific countries.
    /// </para>
    /// <para>
    /// <b>Note</b>: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a <c>processDate</c> that is 2 business days from the current date.
    /// </para>
    /// <para>
    /// See Vendors in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<VendorResponseDto> CreateVendor(CreateVendorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendors"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VendorResponseDto>(),
            CreateVendorError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a vendor bank account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorBankAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateVendorBankAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a vendor bank account for an existing vendor.
    /// <para>
    /// To update vendor bank account information, you must first delete the existing vendor bank account (with <c>DELETE /v3/vendors/{vendorId}/bank-account</c>), and then create a new vendor bank account (with <c>POST /v3/vendors/{vendorId}/bank-account</c>) with the updated information.
    /// </para>
    /// <para>
    /// <b>Note</b>: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a <c>processDate</c> that is 2 business days from the current date.
    /// </para>
    /// </remarks>
    public Task<VendorBankAccountResponseDto> CreateVendorBankAccount(CreateVendorBankAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendors/{vendorId}/bank-account"),
            [new TemplateParam("vendorId", request.VendorId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VendorBankAccountResponseDto>(),
            CreateVendorBankAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a vendor bank account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteVendorBankAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete the existing vendor bank account for a vendor.
    /// <para>
    /// To update vendor bank account information, you must first delete the existing vendor bank account (with <c>DELETE /v3/vendors/{vendorId}/bank-account</c>), and then create a new vendor bank account (with <c>POST /v3/vendors/{vendorId}/bank-account</c>) with the updated information.
    /// </para>
    /// </remarks>
    public Task DeleteVendorBankAccount(DeleteVendorBankAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendors/{vendorId}/bank-account"),
            [new TemplateParam("vendorId", request.VendorId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteVendorBankAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get vendor configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorConfigurationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetConfigurationByVendorIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get international payments (not USD) configuration after vendor creation. This configuration is required for compliance with international payment rules of a vendor country and vendor bank account.
    /// <para>
    /// In the response, the required <c>paymentPurpose</c> and <c>regulatoryFields</c> information is retrieved for the vendor.
    /// </para>
    /// <para>
    /// <b>Note</b>: If you are adding <c>paymentPurpose</c> and <c>regulatoryFields</c> information during international vendor creation, use <c>GET /v3/vendors/configuration/international-payments</c> to get the required configuration before vendor creation.
    /// </para>
    /// <para>
    /// See Create an international vendor for more information on how to set <c>paymentPurpose</c> and <c>regulatoryFields</c>.
    /// </para>
    /// </remarks>
    public Task<VendorConfigurationResponseDto> GetConfigurationByVendorId(GetConfigurationByVendorIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendors/{vendorId}/configuration"),
            [new TemplateParam("vendorId", request.VendorId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VendorConfigurationResponseDto>(),
            GetConfigurationByVendorIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get international payments configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IntlPmtsConfigurationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIntlConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get international payments (not USD) configuration that is required for compliance with international payment rules of a vendor country and vendor bank account.
    /// <para>
    /// This information is based on vendor country, bill currency, and vendor account type. Use this endpoint for getting information before creating an international vendor. In the response, the required <c>paymentPurpose</c> and <c>regulatoryFields</c> information is retrieved for the vendor.
    /// </para>
    /// <para>
    /// <b>Note</b>: If you are adding <c>paymentPurpose</c> and <c>regulatoryFields</c> information after creating an international vendor, use <c>GET /v3/vendors/{vendorId}/configuration</c> to get the required configuration for your created vendor.
    /// </para>
    /// <para>
    /// See Create an international vendor for more information on how to set <c>paymentPurpose</c> and <c>regulatoryFields</c>.
    /// </para>
    /// </remarks>
    public Task<IntlPmtsConfigurationResponseDto> GetIntlConfig(GetIntlConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendors/configuration/international-payments"),
            [],
            [
                new Param("country", request.Country),
                new Param("billCurrency", request.BillCurrency),
                new Param("accountType", request.AccountType),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IntlPmtsConfigurationResponseDto>(),
            GetIntlConfigError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get vendor details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVendorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing vendor.
    /// </remarks>
    public Task<VendorResponseDto> GetVendor(GetVendorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendors/{vendorId}"),
            [new TemplateParam("vendorId", request.VendorId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VendorResponseDto>(),
            GetVendorError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get vendor bank account details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorBankAccountResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVendorBankAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing vendor bank account.
    /// </remarks>
    public Task<VendorBankAccountResponseDto> GetVendorBankAccount(GetVendorBankAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendors/{vendorId}/bank-account"),
            [new TemplateParam("vendorId", request.VendorId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VendorBankAccountResponseDto>(),
            GetVendorBankAccountError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of vendors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListVendorResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListVendorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of vendor objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListVendorResponseDto> ListVendors(ListVendorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendors"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListVendorResponseDto>(),
            ListVendorsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived vendor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreVendorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived vendor. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// <para>
    /// You can perform any valid BILL operation on restored vendors. There is no change when you restore a restored vendor.
    /// </para>
    /// </remarks>
    public Task<VendorResponseDto> RestoreVendor(RestoreVendorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendors/{vendorId}/restore"),
            [new TemplateParam("vendorId", request.VendorId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<VendorResponseDto>(),
            RestoreVendorError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a vendor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VendorResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateVendorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing vendor.
    /// <para>
    /// ### Requirements for enabling vendor payments
    /// </para>
    /// <para>
    /// Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL network.
    /// * <c>line1</c>
    /// * <c>city</c>
    /// * <c>zipOrPostalCode</c>
    /// * <c>country</c>
    /// * <c>payeeName</c>
    /// </para>
    /// <para>
    /// <b>Note</b>: You cannot add or update vendor bank account information with this endpoint. You can add and manage vendor bank account information with a dedicated set of endpoints.
    /// * <b>Create a vendor bank account</b>: <c>POST /v3/vendors/{vendorId}/bank-account</c>
    /// * <b>Get vendor bank account details</b>: <c>GET /v3/vendors/{vendorId}/bank-account</c>
    /// * <b>Delete a vendor bank account</b>: <c>DELETE /v3/vendors/{vendorId}/bank-account</c>
    /// </para>
    /// </remarks>
    public Task<VendorResponseDto> UpdateVendor(UpdateVendorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/vendors/{vendorId}"),
            [new TemplateParam("vendorId", request.VendorId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VendorResponseDto>(),
            UpdateVendorError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
