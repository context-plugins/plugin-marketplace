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
using AmazonForecast.Requests.DatasetImportJob;

namespace AmazonForecast.Api;

public sealed class DatasetImportJob
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DatasetImportJob(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Dataset Import Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDatasetImportJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to. You must specify a DataSource object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see Set up permissions. The training data must be in CSV or Parquet format. The delimiter must be a comma (,). You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files. Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import. To get a list of all your dataset import jobs, filtered by specified
    /// </remarks>
    public Task CreateDatasetImportJob(CreateDatasetImportJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateDatasetImportJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateDatasetImportJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Dataset Import Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDatasetImportJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a dataset import job created using the CreateDatasetImportJob operation. You can delete only dataset import jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeDatasetImportJob operation.
    /// </remarks>
    public Task DeleteDatasetImportJob(DeleteDatasetImportJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DeleteDatasetImportJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteDatasetImportJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Describe Dataset Import Job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DescribeDatasetImportJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Describes a dataset import job created using the CreateDatasetImportJob operation. In addition to listing the parameters provided in the CreateDatasetImportJob request, this operation includes the following properties: CreationTime LastModificationTime DataSize FieldStatistics Status Message - If an error occurred, information about the error.
    /// </remarks>
    public Task DescribeDatasetImportJob(DescribeDatasetImportJobOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DescribeDatasetImportJob"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DescribeDatasetImportJobError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Dataset Import Jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDatasetImportJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of dataset import jobs created using the CreateDatasetImportJob operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the DescribeDatasetImportJob operation. You can filter the list by providing an array of Filter objects.
    /// </remarks>
    public Task ListDatasetImportJobs(ListDatasetImportJobsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListDatasetImportJobs"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListDatasetImportJobsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
