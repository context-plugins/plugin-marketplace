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
using AmazonRekognition.Requests.FacialAnalysis;

namespace AmazonRekognition.Api;

public sealed class FacialAnalysis
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal FacialAnalysis(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Compare Faces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CompareFacesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Compares a face in the source input image with each of the 100 largest faces detected in the target input image. If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic. A false negative is an incorrect prediction that a face in the target image has a low similarity confidence score when compared to the face in the source image. To reduce the probability of false negatives, we recommend that you compare the target image against multiple source images. If you plan to use CompareFaces to make a decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the result to a human for review and further validation before taking action. You pass the input and target images either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. In response, the operation returns an array of face matches ordered by similarity scor
    /// </remarks>
    public Task CompareFaces(CompareFacesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#CompareFaces"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CompareFacesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Detect Faces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DetectFacesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the image. For each face detected, the operation returns face details. These details include a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect the faces or might detect faces with lower confidence. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectFaces action.
    /// </remarks>
    public Task DetectFaces(DetectFacesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DetectFaces"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DetectFacesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
