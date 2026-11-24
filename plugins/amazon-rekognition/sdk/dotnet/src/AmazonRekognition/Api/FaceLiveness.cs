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
using AmazonRekognition.Requests.FaceLiveness;

namespace AmazonRekognition.Api;

public sealed class FaceLiveness
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal FaceLiveness(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Face Liveness Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateFaceLivenessSessionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API operation initiates a Face Liveness session. It returns a SessionId, which you can use to start streaming Face Liveness video and get the results for a Face Liveness session. You can use the OutputConfig option in the Settings parameter to provide an Amazon S3 bucket location. The Amazon S3 bucket stores reference images and audit images. If no Amazon S3 bucket is defined, raw bytes are sent instead. You can use AuditImagesLimit to limit the number of audit images returned when GetFaceLivenessSessionResults is called. This number is between 0 and 4. By default, it is set to 0. The limit is best effort and based on the duration of the selfie-video. You can use the ChallengePreferences option in the Settings parameter to choose between the 'FaceMovementAndLightChallenge' or FaceMovementChallenge' settings. See the Shared Responsibility page for details on guidance for which setting to choose between these two settings depending on your use case and preferences. This parameter is optional and if no parameter is provided, then the 'FaceMovementAndLightChallenge' settings is applied by default.
    /// </remarks>
    public Task CreateFaceLivenessSession(CreateFaceLivenessSessionOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CreateFaceLivenessSession"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreateFaceLivenessSessionError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Face Liveness Session Results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFaceLivenessSessionResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the results of a specific Face Liveness session. It requires the sessionId as input, which was created using CreateFaceLivenessSession. Returns the corresponding Face Liveness confidence score, a reference image that includes a face bounding box, and audit images that also contain face bounding boxes. The Face Liveness confidence score ranges from 0 to 100. The number of audit images returned by GetFaceLivenessSessionResults is defined by the AuditImagesLimit paramater when calling CreateFaceLivenessSession. Reference images are always returned when possible. For a session that has completed, the response can also include a Feedback list describing conditions that were detected in the selfie-video, such as low lighting or an obstructed face, and Metadata about the client that streamed the session.
    /// </remarks>
    public Task GetFaceLivenessSessionResults(GetFaceLivenessSessionResultsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#GetFaceLivenessSessionResults"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetFaceLivenessSessionResultsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
