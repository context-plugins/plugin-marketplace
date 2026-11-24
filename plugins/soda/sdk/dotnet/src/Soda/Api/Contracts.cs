using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Soda.Core;
using Soda.Core.Authentication;
using Soda.Core.Exceptions;
using Soda.Core.Extensions;
using Soda.Core.Models;
using Soda.Core.Request;
using Soda.Core.Response;
using Soda.Errors;
using Soda.Models;
using Soda.Requests.Contracts;

namespace Soda.Api;

/// <summary>
/// Soda Cloud API Contract Endpoints
/// </summary>
public sealed class Contracts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Contracts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List contracts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiListContractsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ContractsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to list contracts in your organization.
    /// <para>
    /// This GET is a paginated API that uses the following parameters to request specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>size</c>: Supply an integer value between 10 and 1000, inclusive. The default value is 10.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>page</c>: Supply an integer value. The default value is 0.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>datasetId</c>: Optionally, use this parameter to list only the contracts for a specific dataset.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>datasetQualifiedName</c>: Optionally, use this parameter instead of <c>datasetId</c> to identify the dataset by its qualified name. Do not supply both <c>datasetId</c> and <c>datasetQualifiedName</c>.</description></item>
    /// </list>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// When filtering by dataset, only users with <b>View dataset</b> permission on the specified dataset can list its contracts. When no dataset filter is supplied, all contracts in the organization are returned.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Contracts</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiListContractsResponse> GetApiV1Contracts(GetApiV1ContractsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/contracts"),
            [],
            [
                new Param("datasetId", request.DatasetId),
                new Param("datasetQualifiedName", request.DatasetQualifiedName),
                new Param("page", request.Page),
                new Param("size", request.Size),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiListContractsResponse>(),
            GetApiV1ContractsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get skeleton contract generation status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiCreateSkeletonContractStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ContractsActionsCreateSkeletonOperationIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the status of a skeleton contract generation operation that was triggered via the <b>Generate skeleton contract</b> endpoint.
    /// <para>
    /// The <c>operationId</c> is the last path segment of the <c>Location</c> header returned by the <b>Generate skeleton contract</b> response.
    /// </para>
    /// <para>
    /// The response includes the operation state, dataset information, and creation timestamp.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Contracts</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiCreateSkeletonContractStatusResponse> GetApiV1ContractsActionsCreateSkeletonOperationId(GetApiV1ContractsActionsCreateSkeletonOperationIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/contracts/actions/createSkeleton/{operationId}"),
            [new TemplateParam("operationId", request.OperationId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiCreateSkeletonContractStatusResponse>(),
            GetApiV1ContractsActionsCreateSkeletonOperationIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get contract generation status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiGenerateContractStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ContractsActionsGenerateOperationIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the status of a contract generation operation that was triggered via the <b>Generate contracts</b> endpoint.
    /// <para>
    /// The <c>operationId</c> is the last path segment of the <c>Location</c> header returned by the <b>Generate contracts</b> response.
    /// </para>
    /// <para>
    /// While the operation is ongoing, only the operation state is returned (<c>datasets</c> will be <c>null</c>). Once the operation reaches a terminal state (completed, failed, or canceled), the full per-dataset scan details are included.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Contracts</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiGenerateContractStatusResponse> GetApiV1ContractsActionsGenerateOperationId(GetApiV1ContractsActionsGenerateOperationIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/contracts/actions/generate/{operationId}"),
            [new TemplateParam("operationId", request.OperationId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiGenerateContractStatusResponse>(),
            GetApiV1ContractsActionsGenerateOperationIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiGetContractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ContractsContractIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to retrieve a specific contract, including its YAML content.
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>View dataset</b> permission can view contracts.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Contracts</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 1000 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiGetContractResponse> GetApiV1ContractsContractId(GetApiV1ContractsContractIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/contracts/{contractId}"),
            [new TemplateParam("contractId", request.ContractId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiGetContractResponse>(),
            GetApiV1ContractsContractIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List contract versions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiListContractVersionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ContractsContractIdVersionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to list versions of a specific contract.
    /// <para>
    /// This GET is a paginated API that uses the following parameters to request specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>size</c>: Supply an integer value between 10 and 1000, inclusive. The default value is 10.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>page</c>: Supply an integer value. The default value is 0.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>createdBefore</c>: Optionally, supply a UTC datetime value (ISO 8601, e.g. <c>2024-01-15T10:30:00</c>) to only return versions created strictly before this timestamp. Use this for consistent pagination.</description></item>
    /// </list>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Contracts</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiListContractVersionsResponse> GetApiV1ContractsContractIdVersions(GetApiV1ContractsContractIdVersionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/contracts/{contractId}/versions"),
            [new TemplateParam("contractId", request.ContractId)],
            [
                new Param("createdBefore", request.CreatedBefore?.ToIso8601()),
                new Param("page", request.Page),
                new Param("size", request.Size),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiListContractVersionsResponse>(),
            GetApiV1ContractsContractIdVersionsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiGetContractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ContractsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to create a new contract on a dataset. The contract is initialized with a template containing the dataset identifier and an empty columns list. Use the publish endpoint to replace this with your full contract YAML.
    /// <para>
    /// Provide either <c>datasetId</c> or <c>datasetQualifiedName</c> in the request body to identify the target dataset. Exactly one must be supplied. If both are supplied, the request is rejected with a 400 error.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage contracts</b> permission can create contracts.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Contracts</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiGetContractResponse> PostApiV1Contracts(PostApiV1ContractsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/contracts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiGetContractResponse>(),
            PostApiV1ContractsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Generate skeleton contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ContractsActionsCreateSkeletonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Triggers skeleton contract generation for a single dataset based on its schema.
    /// <para>
    /// The dataset must be connected to a Soda Runner and must not already have a published contract.
    /// </para>
    /// <para>
    /// Provide either <c>datasetId</c> (UUID) or <c>datasetQualifiedName</c> (e.g. <c>my_datasource/my_schema/my_table</c>). Exactly one must be supplied.
    /// </para>
    /// <para>
    /// Returns <c>202 Accepted</c> with a <c>Location</c> header pointing to the status endpoint. Use the status endpoint to monitor the progress of the skeleton generation.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Contracts</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task PostApiV1ContractsActionsCreateSkeleton(PostApiV1ContractsActionsCreateSkeletonRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/contracts/actions/createSkeleton"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostApiV1ContractsActionsCreateSkeletonError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Generate contracts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ContractsActionsGenerateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Triggers AI-powered contract generation for one or more datasets. The contract generation runs asynchronously.
    /// <para>
    /// Each dataset must be connected to a Soda Runner and must not already have a contract. If any dataset is not eligible, the request is rejected with a <c>400</c> response listing the ineligible datasets and reasons.
    /// </para>
    /// <para>
    /// Provide <c>datasetIds</c> (list of UUIDs) and/or <c>datasetQualifiedNames</c> (list of qualified names, e.g. <c>my_datasource/my_schema/my_table</c>). Both lists are additive. At least one must be non-empty.
    /// </para>
    /// <para>
    /// Returns <c>202 Accepted</c> with a <c>Location</c> header pointing to the status endpoint. Use the status endpoint to monitor the progress of the contract generation.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Contracts</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task PostApiV1ContractsActionsGenerate(PostApiV1ContractsActionsGenerateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/contracts/actions/generate"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostApiV1ContractsActionsGenerateError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish a contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiGetContractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ContractsContractIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to publish new YAML content for an existing contract.
    /// <para>
    /// The <c>contents</c> field must contain valid Soda contract YAML. If the YAML is malformed or does not conform to the contract schema, the request is rejected with a 400 error.
    /// </para>
    /// <para>
    /// The <c>dataset</c> in the YAML must name the dataset that <c>contractId</c> belongs to. Contents naming a different dataset are rejected with a 400 error.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage contracts</b> permission can publish contracts.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Contracts</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiGetContractResponse> PostApiV1ContractsContractId(PostApiV1ContractsContractIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/contracts/{contractId}"),
            [new TemplateParam("contractId", request.ContractId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiGetContractResponse>(),
            PostApiV1ContractsContractIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Verify a contract
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1ContractsContractIdVerifyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint triggers a contract verification scan for the specified contract.
    /// <para>
    /// The response, when successful, is <c>201</c> and contains headers <c>Location</c> and <c>X-Soda-Scan-Id</c> which identify the triggered scan. Use the value of <c>X-Soda-Scan-Id</c> in the <c>scanId</c> parameter of the <b>Get scan status</b>, <b>Get scan logs</b>, and <b>Cancel a scan</b> endpoints.
    /// </para>
    /// <para>
    /// Optionally, you can provide <c>checkPaths</c> to limit verification to specific checks within the contract. Note: <c>checkPaths</c> may not be available for all organizations.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Only users with <b>Manage contracts</b> permission can verify contracts.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Contracts</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task PostApiV1ContractsContractIdVerify(PostApiV1ContractsContractIdVerifyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/contracts/{contractId}/verify"),
            [new TemplateParam("contractId", request.ContractId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostApiV1ContractsContractIdVerifyError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);
}
