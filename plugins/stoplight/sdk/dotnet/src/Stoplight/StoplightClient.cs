using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Stoplight.Core;
using Stoplight.Core.Authentication;
using Stoplight.Core.Configuration;
using Stoplight.Core.Exceptions;
using Stoplight.Core.Logging;
using Stoplight.Core.Models;
using Stoplight.Core.Request;
using Stoplight.Core.Response;
using Stoplight.Errors;
using Stoplight.Models;
using Stoplight.Requests;

namespace Stoplight;

public sealed class StoplightClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public StoplightClient(HttpClient httpClient, StoplightClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "StoplightClient/api-v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "api-v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("STOPLIGHT_LOG"),
            "StoplightClient",
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
    /// Export
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JsonElement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVersionsVersionIdExportFormatError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Export a version to your choice of API specification.
    /// <para>
    /// ### Allowed Formats:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>oas.json</description></item>
    ///   <item><description>oas.yaml</description></item>
    ///   <item><description>raml08.yaml</description></item>
    ///   <item><description>raml10.yaml</description></item>
    ///   <item><description>stoplight.json</description></item>
    ///   <item><description>stoplight.yaml</description></item>
    /// </list>
    /// <para>
    /// The stoplight format actually returns OAS (Swagger 2) with x-stoplight annotations. If you are exporting with the intent on importing back into Stoplight, this export format preserves the most information.
    /// </para>
    /// <para>
    /// ### Example URL:
    /// </para>
    /// <para>
    /// <c>https://api.stoplight.io/v1/versions/123/export/oas.json</c>
    /// </para>
    /// </remarks>
    public Task<JsonElement> GetVersionsVersionIdExportFormat(GetVersionsVersionIdExportFormatRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/versions/{versionId}/export/{format}"),
            [new TemplateParam("versionId", request.VersionId), new TemplateParam("format", request.Format)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JsonElement>(),
            GetVersionsVersionIdExportFormatError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish Anonymous
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VersionsPublishAnonResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostVersionsPublishAnonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Anonymously publish to API Docs.
    /// <para>
    /// This endpoint will take a JSON spec or a URL to a swagger or raml spec.
    /// </para>
    /// <code>
    /// {
    /// "specData": {...}
    /// }
    /// </code>
    /// <para>
    /// or
    /// </para>
    /// <code>
    /// {
    /// "url": "http://petstore.swagger.io/v2/swagger.json"
    /// }
    /// </code>
    /// <para>
    /// The spec will be published to api-docs.io anonymously, which means you will not be able to update or remove this documentation.
    /// </para>
    /// <para>
    /// The response will contain a url to the published documentation.
    /// </para>
    /// <code>
    /// {
    /// "url": "https://swagger-petstore.api-docs.io/v1.0.0"
    /// }
    /// </code>
    /// <para>
    /// The limitations of anonymous publishing
    /// * Cannot update/remove the documentation
    /// * Cannot choose the subdomain
    /// * Cannot choose the version
    /// * Cannot add theming
    /// </para>
    /// </remarks>
    public Task<VersionsPublishAnonResponse> PostVersionsPublishAnon(PostVersionsPublishAnonRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/versions/publish/anon"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VersionsPublishAnonResponse>(),
            PostVersionsPublishAnonError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VersionsPublishResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostVersionsVersionIdPublishError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Re-publish an API version in Stoplight. This will re-publish the given API version, with whatever publish settings have already been setup in the app.
    /// <para>
    /// This will only work with APIs that have previously been published at least once.
    /// </para>
    /// <para>
    /// This works well with the #endpoint:957qEfc97BB5XGAeZ endpoint to augment your continuous integration processes, and automatically re-publish your documentation when certain events happen. Once such scenario is:
    /// </para>
    /// <list type="number">
    ///   <item><description>Swagger is generated from your codebase, and pushed up to Github.</description></item>
    ///   <item><description>A simple script that you write sends a request to the Stoplight API to import the new specification, passing in the URL to the swagger file on Github.</description></item>
    ///   <item><description>After the import succeeds, and your API in Stoplight is up to date, the script sends a request to the Stoplight API (this endpoint) to re-publish your documentation.</description></item>
    /// </list>
    /// </remarks>
    public Task<VersionsPublishResponse> PostVersionsVersionIdPublish(PostVersionsVersionIdPublishRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/versions/{versionId}/publish"),
            [new TemplateParam("versionId", request.VersionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<VersionsPublishResponse>(),
            PostVersionsVersionIdPublishError.Response,
            _auth.Authorization,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VersionsImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutVersionsVersionIdImportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Import the given specification into an existing version.
    /// <para>
    /// <b>Warning, this is a destructive action! Any resources present in both the existing version, and the specification being imported, will be overwritten.</b>
    /// </para>
    /// <para>
    /// This endpoint is particularly useful when you manage a specification file (Swagger or RAML) outside of Stoplight, and want to keep your Stoplight API version up to date as that specification changes.
    /// </para>
    /// <para>
    /// By default, a "merge" is performed when importing. If a resource exists in the specification that you are importing, and in the Stoplight API, the resource will be overwritten. If a resource exists in the Stoplight API, but not in the spefication that you are importing, the resource will be left alone (and not deleted).
    /// </para>
    /// <para>
    /// You can include an optional <c>options</c> property in the request body, to indicate if you would like to perform more of a replacement (instead of a merge). The options are documented in full in the response definition below these notes.
    /// </para>
    /// <para>
    /// Take this request + request body for example:
    /// </para>
    /// <para>
    /// <c>PUT https://api.stoplight.io/v1/versions/123/import</c>
    /// <code>
    /// {
    /// "url": "http://petstore.swagger.io/v2/swagger.json",
    /// "options": {
    /// "removeExtraEndpoints": true,
    /// "removeExtraSchemas": true
    /// }
    /// }
    /// </code>
    /// </para>
    /// <para>
    /// This request will grab the swagger specification described at <c>http://petstore.swagger.io/v2/swagger.json</c>, and import it into the Stoplight API version with id <c>123</c>. Additionally, it will delete any existing endpoints or models that are not described in the petstore swagger being imported.
    /// </para>
    /// <para>
    /// Instead of a URL, you can provide the actual specification to be imported, either as a string (in the case of YAML) or an object (in the case of JSON). That request would look something like this:
    /// </para>
    /// <para>
    /// <c>PUT https://api.stoplight.io/v1/versions/123/import</c>
    /// <code>
    /// {
    /// "specData": {
    /// "swagger": "2.0",
    /// "info": {}
    /// ... rest of spec
    /// }
    /// }
    /// </code>
    /// </para>
    /// </remarks>
    public Task<VersionsImportResponse> PutVersionsVersionIdImport(PutVersionsVersionIdImportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/versions/{versionId}/import"),
            [new TemplateParam("versionId", request.VersionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<VersionsImportResponse>(),
            PutVersionsVersionIdImportError.Response,
            _auth.Authorization,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unpublish
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VersionsUnpublishResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutVersionsVersionIdUnpublishError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Unpublish the documentation associated with the given API version.
    /// </remarks>
    public Task<VersionsUnpublishResponse> PutVersionsVersionIdUnpublish(PutVersionsVersionIdUnpublishRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/versions/{versionId}/unpublish"),
            [new TemplateParam("versionId", request.VersionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            EmptyBody.Instance,
            JsonResponse.Create<VersionsUnpublishResponse>(),
            PutVersionsVersionIdUnpublishError.Response,
            _auth.Authorization,
            requestOptions,
            cancellationToken);
}
