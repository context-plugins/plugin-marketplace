using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonRekognition.Core;
using AmazonRekognition.Core.Exceptions;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Core.Request;
using AmazonRekognition.Core.Response;
using AmazonRekognition.Errors;
using AmazonRekognition.Requests.CelebrityRecognitionApi;

namespace AmazonRekognition.Api;

public sealed class CelebrityRecognitionApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CelebrityRecognitionApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Celebrity Recognition
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCelebrityRecognitionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by StartCelebrityRecognition. Celebrity recognition in a video is an asynchronous operation. Analysis is started by a call to StartCelebrityRecognition which returns a job identifier (JobId). When the celebrity recognition operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartCelebrityRecognition. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetCelebrityDetection and pass the job identifier (JobId) from the initial call to StartCelebrityDetection. For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide. GetCelebrityRecognition returns detected celebrities and the time(s) they are detected in an array (Celebrities) of CelebrityRecognition objects. Each CelebrityRecognition contains information about the celebrity in a CelebrityDetail object and the time, Timestamp, the celebrity was detected. This CelebrityDetail object stores information about the
    /// </remarks>
    public Task GetCelebrityRecognition(GetCelebrityRecognitionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetCelebrityRecognition"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetCelebrityRecognitionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Recognize Celebrities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RecognizeCelebritiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an array of celebrities recognized in the input image. For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns the 64 largest faces in the image. It lists the recognized celebrities in the CelebrityFaces array and any unrecognized faces in the UnrecognizedFaces array. RecognizeCelebrities doesn't return celebrities whose faces aren't among the largest 64 faces in the image. For each celebrity recognized, RecognizeCelebrities returns a Celebrity object. The Celebrity object contains the celebrity name, ID, URL links to additional information, match confidence, and a ComparedFace object that you can use to locate the celebrity's face on the image. Amazon Rekognition doesn't retain information about which images a celebrity has been recognized in. Your application must store this information and use the Celebrity ID property as a unique identifier for the celebrity. If you don't store the celebrity name or additional information URLs returned by RecognizeCelebrities, you will need the ID to identify the celebrity in a call to the GetCelebrityInfo operation. You pass the input image either as base64-encoded image
    /// </remarks>
    public Task RecognizeCelebrities(RecognizeCelebritiesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#RecognizeCelebrities"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RecognizeCelebritiesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Celebrity Recognition
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartCelebrityRecognitionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts asynchronous recognition of celebrities in a stored video. Amazon Rekognition Video can detect celebrities in a video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartCelebrityRecognition returns a job identifier (JobId) which you use to get the results of the analysis. When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetCelebrityRecognition and pass the job identifier (JobId) from the initial call to StartCelebrityRecognition. For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide.
    /// </remarks>
    public Task StartCelebrityRecognition(StartCelebrityRecognitionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#StartCelebrityRecognition"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            StartCelebrityRecognitionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
