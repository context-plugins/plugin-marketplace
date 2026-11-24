using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonAppSync.Core;
using AmazonAppSync.Core.Exceptions;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Core.Request;
using AmazonAppSync.Core.Response;
using AmazonAppSync.Errors;
using AmazonAppSync.Models;
using AmazonAppSync.Requests.Operations;

namespace AmazonAppSync.Api;

public sealed class Operations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Operations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Associate Merged Graphql Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AssociateMergedGraphqlApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociateMergedGraphqlApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates an association between a Merged API and source API using the source API's identifier.
    /// </remarks>
    public Task<AssociateMergedGraphqlApiResponse> AssociateMergedGraphqlApi(AssociateMergedGraphqlApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations"),
            [new TemplateParam("sourceApiIdentifier", request.SourceApiIdentifier)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AssociateMergedGraphqlApiResponse>(),
            AssociateMergedGraphqlApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disassociate Merged Graphql Api
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DisassociateMergedGraphqlApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DisassociateMergedGraphqlApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an association between a Merged API and source API using the source API's identifier and the association ID.
    /// </remarks>
    public Task<DisassociateMergedGraphqlApiResponse> DisassociateMergedGraphqlApi(DisassociateMergedGraphqlApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}"),
            [
                new TemplateParam("sourceApiIdentifier", request.SourceApiIdentifier),
                new TemplateParam("associationId", request.AssociationId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<DisassociateMergedGraphqlApiResponse>(),
            DisassociateMergedGraphqlApiError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Evaluate Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EvaluateCodeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EvaluateCodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For APPSYNC_JS runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type.
    /// </remarks>
    public Task<EvaluateCodeResponse> EvaluateCode(EvaluateCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/dataplane-evaluatecode"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EvaluateCodeResponse>(),
            EvaluateCodeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Flush Api Cache
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FlushApiCacheError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Flushes an ApiCache object.
    /// </remarks>
    public Task<object> FlushApiCache(FlushApiCacheRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/FlushCache"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            FlushApiCacheError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Graphql Api Environment Variables
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetGraphqlApiEnvironmentVariablesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGraphqlApiEnvironmentVariablesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the list of environmental variable key-value pairs associated with an API by its ID value.
    /// </remarks>
    public Task<GetGraphqlApiEnvironmentVariablesResponse> GetGraphqlApiEnvironmentVariables(GetGraphqlApiEnvironmentVariablesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/environmentVariables"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetGraphqlApiEnvironmentVariablesResponse>(),
            GetGraphqlApiEnvironmentVariablesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Schema Creation Status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetSchemaCreationStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSchemaCreationStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the current status of a schema creation operation.
    /// </remarks>
    public Task<GetSchemaCreationStatusResponse> GetSchemaCreationStatus(GetSchemaCreationStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/schemacreation"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetSchemaCreationStatusResponse>(),
            GetSchemaCreationStatusError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put Graphql Api Environment Variables
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PutGraphqlApiEnvironmentVariablesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutGraphqlApiEnvironmentVariablesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a list of environmental variables in an API by its ID value. When creating an environmental variable, it must follow the constraints below: Both JavaScript and VTL templates support environmental variables. Environmental variables are not evaluated before function invocation. Environmental variables only support string values. Any defined value in an environmental variable is considered a string literal and not expanded. Variable evaluations should ideally be performed in the function code. When creating an environmental variable key-value pair, it must follow the additional constraints below: Keys must begin with a letter. Keys must be at least two characters long. Keys can only contain letters, numbers, and the underscore character (_). Values can be up to 512 characters long. You can configure up to 50 key-value pairs in a GraphQL API. You can create a list of environmental variables by adding it to the environmentVariables payload as a list in the format {"key1":"value1","key2":"value2", …}. Note that each call of the PutGraphqlApiEnvironmentVariables action will result in the overwriting of the existing environmental variable list of that API. This means the existing e
    /// </remarks>
    public Task<PutGraphqlApiEnvironmentVariablesResponse> PutGraphqlApiEnvironmentVariables(PutGraphqlApiEnvironmentVariablesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/environmentVariables"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PutGraphqlApiEnvironmentVariablesResponse>(),
            PutGraphqlApiEnvironmentVariablesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Schema Creation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartSchemaCreationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartSchemaCreationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.
    /// </remarks>
    public Task<StartSchemaCreationResponse> StartSchemaCreation(StartSchemaCreationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/apis/{apiId}/schemacreation"),
            [new TemplateParam("apiId", request.ApiId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartSchemaCreationResponse>(),
            StartSchemaCreationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Schema Merge
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartSchemaMergeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartSchemaMergeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Initiates a merge operation. Returns a status that shows the result of the merge operation.
    /// </remarks>
    public Task<StartSchemaMergeResponse> StartSchemaMerge(StartSchemaMergeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge"),
            [
                new TemplateParam("associationId", request.AssociationId),
                new TemplateParam("mergedApiIdentifier", request.MergedApiIdentifier),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<StartSchemaMergeResponse>(),
            StartSchemaMergeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
