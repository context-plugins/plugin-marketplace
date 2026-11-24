using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Soda.Core;
using Soda.Core.Authentication;
using Soda.Core.Exceptions;
using Soda.Core.Models;
using Soda.Core.Request;
using Soda.Core.Response;
using Soda.Errors;
using Soda.Models;
using Soda.Requests.Secrets;

namespace Soda.Api;

/// <summary>
/// Soda Cloud API Secret Endpoints
/// </summary>
public sealed class Secrets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Secrets(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a secret
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDeleteSecretResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1SecretsSecretIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an existing secret.
    /// <para>
    /// The secret cannot be deleted if it is referenced by a datasource configuration.
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
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Secrets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDeleteSecretResponse> DeleteApiV1SecretsSecretId(DeleteApiV1SecretsSecretIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/secrets/{secretId}"),
            [new TemplateParam("secretId", request.SecretId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDeleteSecretResponse>(),
            DeleteApiV1SecretsSecretIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List secrets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiListSecretsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1SecretsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to list secrets in your organization.
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
    ///   <item><description><c>search</c>: Supply a string value to filter secrets by name (case-insensitive partial match).</description></item>
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
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Secrets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiListSecretsResponse> GetApiV1Secrets(GetApiV1SecretsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/secrets"),
            [],
            [new Param("page", request.Page), new Param("search", request.Search), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiListSecretsResponse>(),
            GetApiV1SecretsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get the encryption public key
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiGetEncryptionKeyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1SecretsPublicKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the RSA public key in JWK (JSON Web Key) format, used for client-side encryption of secret values.
    /// <para>
    /// ## Usage
    /// </para>
    /// <para>
    /// When creating or updating a secret, the secret value must be encrypted client-side before sending it to the API. This endpoint provides the RSA public key needed for that encryption.
    /// </para>
    /// <para>
    /// ## Encryption workflow
    /// </para>
    /// <list type="number">
    ///   <item><description>Fetch this public key.</description></item>
    /// </list>
    /// <list type="number">
    ///   <item><description>Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).</description></item>
    /// </list>
    /// <list type="number">
    ///   <item><description>Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the ciphertext and prefix it with <c>encrypted_</c>. This becomes the <c>encryptedValue</c> field.</description></item>
    /// </list>
    /// <list type="number">
    ///   <item><description>Export the raw AES key and IV as base64 strings and concatenate them as <c>{base64_key}:::{base64_iv}</c>. Encrypt this string using RSA-OAEP (SHA-256) with this public key. Base64-encode the result. This becomes the <c>encryptionKey</c> field.</description></item>
    /// </list>
    /// <list type="number">
    ///   <item><description>Use the <c>encryptedValue</c> and <c>encryptionKey</c> in the create or update secret request.</description></item>
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
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Secrets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiGetEncryptionKeyResponse> GetApiV1SecretsPublicKey(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/secretsPublicKey"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiGetEncryptionKeyResponse>(),
            GetApiV1SecretsPublicKeyError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a secret
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiCreateSecretResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1SecretsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new secret in your organization. Secrets store encrypted credentials that can be referenced in datasource configurations using <c>${secret.NAME}</c> placeholders, keeping sensitive values out of plain text.
    /// <para>
    /// ## Encryption
    /// </para>
    /// <para>
    /// Secret values must be encrypted <b>client-side</b> before sending them to this endpoint. This enables a zero-trust design, where Soda never decrypts the secret. Decryption happens only during scan execution, within the runner.
    /// </para>
    /// <para>
    /// Use the <c>GET /api/v1/secretsPublicKey</c> endpoint to obtain the server's RSA public key. The encryption uses a two-layer scheme:
    /// </para>
    /// <list type="number">
    ///   <item><description>Fetch the RSA public key from <c>GET /api/v1/secretsPublicKey</c>.</description></item>
    /// </list>
    /// <list type="number">
    ///   <item><description>Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).</description></item>
    /// </list>
    /// <list type="number">
    ///   <item><description>Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the ciphertext and prefix it with <c>encrypted_</c>. This becomes the <c>encryptedValue</c> field.</description></item>
    /// </list>
    /// <list type="number">
    ///   <item><description>Export the raw AES key and IV as base64 strings and concatenate them as <c>{base64_key}:::{base64_iv}</c>. Encrypt this string using RSA-OAEP (SHA-256) with the public key from step 1. Base64-encode the result. This becomes the <c>encryptionKey</c> field.</description></item>
    /// </list>
    /// <para>
    /// ## Constraints
    /// </para>
    /// <list type="bullet">
    ///   <item><description>The secret <c>name</c> must not contain whitespace and must be unique within the organization.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description>Both <c>encryptionKey</c> and <c>encryptedValue</c> are required.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description>The organization must have the contracts feature enabled and the secure store must not be disabled.</description></item>
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
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Secrets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiCreateSecretResponse> PostApiV1Secrets(PostApiV1SecretsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/secrets"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiCreateSecretResponse>(),
            PostApiV1SecretsError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a secret
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiUpdateSecretResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1SecretsSecretIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the encrypted value of an existing secret. The secret name cannot be changed.
    /// <para>
    /// Both <c>encryptionKey</c> and <c>encryptedValue</c> must be provided together — you cannot update one without the other.
    /// </para>
    /// <para>
    /// ## Encryption
    /// </para>
    /// <para>
    /// The new secret value must be encrypted <b>client-side</b> using the same two-layer encryption scheme as creation. See the <c>POST /api/v1/secrets</c> (Create a secret) endpoint for the full encryption workflow.
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
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Secrets</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 100 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiUpdateSecretResponse> PostApiV1SecretsSecretId(PostApiV1SecretsSecretIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/secrets/{secretId}"),
            [new TemplateParam("secretId", request.SecretId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiUpdateSecretResponse>(),
            PostApiV1SecretsSecretIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);
}
