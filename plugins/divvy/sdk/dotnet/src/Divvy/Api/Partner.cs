using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.Exceptions;
using Divvy.Core.Models;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Errors;
using Divvy.Models;
using Divvy.Requests.Partner;

namespace Divvy.Api;

public sealed class Partner
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Partner(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchivePartnerUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing user. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// <para>
    /// You can restore an archived user with <c>POST /v3/users/{userId}/restore</c>. There is no change when you archive an archived user.
    /// </para>
    /// <para>
    /// This operation requires partner-level permissions.
    /// * A <c>sessionId</c> header value generated with API partner login
    /// * An <c>appKey</c> header value
    /// * The <c>organizationId</c> of the organization
    /// </para>
    /// </remarks>
    public Task<OrganizationUserResponseDto> ArchivePartnerUser(ArchivePartnerUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/users/{userId}/archive"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("organizationId", request.OrganizationId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationUserResponseDto>(),
            ArchivePartnerUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an organization
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateOrganizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new organization.
    /// <para>
    /// This operation requires partner-level permissions.
    /// * A <c>sessionId</c> header value generated with API partner login
    /// * An <c>appKey</c> header value
    /// </para>
    /// <para>
    /// See Organizations for BILL partners in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<OrganizationResponseDto> CreateOrganization(CreateOrganizationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/organizations"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OrganizationResponseDto>(),
            CreateOrganizationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePartnerUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new user. The new user is created for the organization (<c>organizationId</c>) in the request header.
    /// <para>
    /// In the request, set <c>username</c> as a unique alphanumeric value. The value must be 40 characters or fewer. This field is not case-sensitive. Do not set the value as an email address or any PII value. BILL uses this value to uniquely identify each user.
    /// </para>
    /// <para>
    /// This operation requires partner-level permissions.
    /// * A <c>sessionId</c> header value generated with API partner login
    /// * An <c>appKey</c> header value
    /// * The <c>organizationId</c> of the organization
    /// </para>
    /// <para>
    /// See Users for BILL partners in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<OrganizationUserResponseDto> CreatePartnerUser(CreatePartnerUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/users"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("organizationId", request.OrganizationId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OrganizationUserResponseDto>(),
            CreatePartnerUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Add phone for risk verification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePhoneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a phone number for a created user. BILL requires organization users to have a linked phone number for initiating risk verification for the organization.
    /// <para>
    /// You can check whether a phone number has been added for the user with <c>GET /v3/risk-verifications/phone</c>.
    /// </para>
    /// <para>
    /// After you add a phone number with this endpoint, you can initiate risk verification for the organization with <c>POST /v3/risk-verifications</c>.
    /// </para>
    /// </remarks>
    public Task CreatePhone(CreatePhoneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/risk-verifications/{userId}/phone"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("organizationId", request.OrganizationId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            CreatePhoneError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get user details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPartnerUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing user.
    /// <para>
    /// This operation requires partner-level permissions.
    /// * A <c>sessionId</c> header value generated with API partner login
    /// * An <c>appKey</c> header value
    /// * The <c>organizationId</c> of the organization
    /// </para>
    /// </remarks>
    public Task<OrganizationUserResponseDto> GetPartnerUser(GetPartnerUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/users/{userId}"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("organizationId", request.OrganizationId),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationUserResponseDto>(),
            GetPartnerUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get user role details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RoleResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPartnerUserRoleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing user role in a BILL organization.
    /// <para>
    /// This operation requires partner-level permissions.
    /// * A <c>sessionId</c> header value generated with API partner login
    /// * An <c>appKey</c> header value
    /// * The <c>organizationId</c> of the organization
    /// </para>
    /// </remarks>
    public Task<RoleResponseDto> GetPartnerUserRole(GetPartnerUserRoleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/roles/{roleId}"),
            [new TemplateParam("roleId", request.RoleId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("organizationId", request.OrganizationId),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RoleResponseDto>(),
            GetPartnerUserRoleError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of organizations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoOrganizationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPartnerOrganizationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of organization objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// <para>
    /// This operation requires partner-level permissions.
    /// * A <c>sessionId</c> header value generated with API partner login
    /// * An <c>appKey</c> header value
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoOrganizationResponseDto> ListPartnerOrganizations(ListPartnerOrganizationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/organizations"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("appKey", request.AppKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoOrganizationResponseDto>(),
            ListPartnerOrganizationsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of user roles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoRoleResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPartnerUserRolesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of user role objects available in a BILL organization. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// <para>
    /// This operation requires partner-level permissions.
    /// * A <c>sessionId</c> header value generated with API partner login
    /// * An <c>appKey</c> header value
    /// * The <c>organizationId</c> of the organization
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoRoleResponseDto> ListPartnerUserRoles(ListPartnerUserRolesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/roles"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("organizationId", request.OrganizationId),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoRoleResponseDto>(),
            ListPartnerUserRolesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of users
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoOrganizationUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPartnerUsersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of user objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// <para>
    /// This operation requires partner-level permissions.
    /// * A <c>sessionId</c> header value generated with API partner login
    /// * An <c>appKey</c> header value
    /// * The <c>organizationId</c> of the organization
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoOrganizationUserResponseDto> ListPartnerUsers(ListPartnerUsersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/users"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("organizationId", request.OrganizationId),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoOrganizationUserResponseDto>(),
            ListPartnerUsersError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// API login as user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LoginAsUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LoginAsUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sign in to a created organization as a created user of that organization. In the response, your API session is created and a generated <c>sessionId</c> is available for organization-level BILL API operations.
    /// <para>
    /// This endpoint is required for a specific BILL partner-level workflow.
    /// 1. Sign in to your partner account with API partner login.
    /// 2. Create a child BILL organization with <c>POST /v3/partner/organizations</c>. In the response, a BILL-generated organization <c>id</c> is available.
    /// 3. Create a user for the child BILL organization with <c>POST /v3/partner/users</c>. In the response, a BILL-generated user <c>id</c> is available.
    /// 4. Sign in to the created organization as the created user of that organization with <c>POST /v3/partner/login-as-user</c>. After signing in, you can perform organization-level BILL API operations, such as creating a bill or paying a vendor. All organization-level BILL API operations require a <c>devKey</c> and <c>sessionId</c>.
    /// </para>
    /// <para>
    /// <b>Note</b>: When you create an organization and then create a user for that organization, it is important that you initiate risk verification with <c>POST /v3/risk-verifications</c>. See Initiate risk verification for an organization for more information.
    /// </para>
    /// <para>
    /// This operation requires partner-level permissions.
    /// * A <c>sessionId</c> header value generated with API partner login
    /// * An <c>appKey</c> header value
    /// </para>
    /// <para>
    /// You can sign out with <c>POST /v3/logout</c>. If your API session is inactive for 35 minutes, the session expires and you are automatically signed out.
    /// </para>
    /// <para>
    /// ### MFA-trusted API session
    /// Set both <c>rememberMeId</c> and <c>device</c> as additional fields in your <c>POST /v3/partner/login-as-user</c> request to create an MFA-trusted API session.
    /// </para>
    /// </remarks>
    public Task<LoginAsUserResponseDto> LoginAsUser(LoginAsUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/login-as-user"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<LoginAsUserResponseDto>(),
            LoginAsUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// API partner login
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PartnerLoginResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PartnerLoginError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sign in to your BILL partner account. In the response, your partner API session is created and a BILL-generated <c>sessionId</c> is available. Use the <c>sessionId</c> in all subsequent API calls to confirm that you are in a signed-in session.
    /// <para>
    /// You get additional permissions with a partner account <c>sessionId</c>.
    /// * Create a child BILL organization with <c>POST /v3/partner/organizations</c>.
    /// * Create a user for the child BILL organization with <c>POST /v3/partner/users</c>.
    /// * Sign in to the created organization as the created user of that organization with <c>/v3/partner/login-as-user</c>. After signing in, you can perform organization-level BILL API operations, such as creating a bill or paying a vendor. All organization-level BILL API operations require a <c>devKey</c> and <c>sessionId</c>.
    /// </para>
    /// <para>
    /// <b>Note</b>: When you create an organization and then create a user for that organization, it is important that you initiate risk verification with <c>POST /v3/risk-verifications</c>. See Initiate risk verification for an organization for more information.
    /// </para>
    /// <para>
    /// You can sign out with <c>POST /v3/logout</c>. If your API session is inactive for 35 minutes, the session expires and you are automatically signed out.
    /// </para>
    /// </remarks>
    public Task<PartnerLoginResponseDto> PartnerLogin(PartnerLoginRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/login"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PartnerLoginResponseDto>(),
            PartnerLoginError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestorePartnerUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived user. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// <para>
    /// You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.
    /// </para>
    /// <para>
    /// This operation requires partner-level permissions.
    /// * A <c>sessionId</c> header value generated with API partner login
    /// * An <c>appKey</c> header value
    /// * The <c>organizationId</c> of the organization
    /// </para>
    /// </remarks>
    public Task<OrganizationUserResponseDto> RestorePartnerUser(RestorePartnerUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/users/{userId}/restore"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("organizationId", request.OrganizationId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<OrganizationUserResponseDto>(),
            RestorePartnerUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an organization price plan
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateOrgPartnerPricePlanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the price plan for an existing organization.
    /// <para>
    /// When you onboard as a BILL partner, BILL works with you to set up price plans for the organizations you create. Your organizations can have up to 5 price plans. Each price plan is named in the <c>PricePlanN</c> format (<c>PricePlan1</c> up to <c>PricePlan5</c>).
    /// </para>
    /// </remarks>
    public Task<StatusDto> UpdateOrgPartnerPricePlan(UpdateOrgPartnerPricePlanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/organizations/{organizationId}/price-plan"),
            [new TemplateParam("organizationId", request.OrganizationId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StatusDto>(),
            UpdateOrgPartnerPricePlanError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrganizationUserResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePartnerUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing user.
    /// <para>
    /// This operation requires partner-level permissions.
    /// * A <c>sessionId</c> header value generated with API partner login
    /// * An <c>appKey</c> header value
    /// * The <c>organizationId</c> of the organization
    /// </para>
    /// </remarks>
    public Task<OrganizationUserResponseDto> UpdatePartnerUser(UpdatePartnerUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/partner/users/{userId}"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("organizationId", request.OrganizationId),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OrganizationUserResponseDto>(),
            UpdatePartnerUserError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
