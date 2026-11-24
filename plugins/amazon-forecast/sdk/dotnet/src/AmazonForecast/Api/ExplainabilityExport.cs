using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonForecast.Core;
using AmazonForecast.Core.Exceptions;
using AmazonForecast.Core.Models;
using AmazonForecast.Core.Request;
using AmazonForecast.Core.Response;
using AmazonForecast.Errors;
using AmazonForecast.Requests.ExplainabilityExport;

namespace AmazonForecast.Api;

public sealed class ExplainabilityExport
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ExplainabilityExport(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Explainability Export
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateExplainabilityExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exports an Explainability resource created by the CreateExplainability operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket. You must specify a DataDestination object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the DescribeExplainabilityExport operation.
    /// </remarks>
    public Task CreateExplainabilityExport(CreateExplainabilityExportOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateExplainabilityExport"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateExplainabilityExportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Explainability Export
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteExplainabilityExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an Explainability export.
    /// </remarks>
    public Task DeleteExplainabilityExport(DeleteExplainabilityExportOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteExplainabilityExport"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteExplainabilityExportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Explainability Export
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeExplainabilityExportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Describes an Explainability export created using the CreateExplainabilityExport operation.
    /// </remarks>
    public Task DescribeExplainabilityExport(DescribeExplainabilityExportOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeExplainabilityExport"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeExplainabilityExportError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Explainability Exports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListExplainabilityExportsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of Explainability exports created using the CreateExplainabilityExport operation. This operation returns a summary for each Explainability export. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular Explainability export, use the ARN with the DescribeExplainability operation.
    /// </remarks>
    public Task ListExplainabilityExports(ListExplainabilityExportsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListExplainabilityExports"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListExplainabilityExportsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
