using System;
using System.Collections.Generic;
using System.Globalization;
using System.Runtime.CompilerServices;
using System.Text;

namespace ReadMe.Core.Webhooks.Signing;

internal sealed class SignatureVerifier
{
    internal required string Secret { get; init; }

    internal required SignatureAlgorithm Algorithm { get; init; }

    internal required SignatureDigestEncoding DigestEncoding { get; init; }

    internal required IReadOnlyList<MessageSegment> MessageSegments { get; init; }

    internal required string SignatureHeaderName { get; init; }

    internal required SignatureHeaderFormat SignatureHeaderFormat { get; init; }

    internal string? TimestampHeaderName { get; init; }

    internal TimeSpan? ReplayTolerance { get; init; }

    internal required TimeProvider Clock { get; init; }

    internal bool Verify(WebhookRequest request)
    {
        if (request is null) throw new ArgumentNullException(nameof(request));

        if (!request.TryGetHeader(SignatureHeaderName, out var signatureHeader))
            return false;

        if (ReplayTolerance is { } tolerance)
        {
            if (TimestampHeaderName is null or "")
                return false;

            if (!request.TryGetHeader(TimestampHeaderName, out var timestamp))
                return false;

            if (!IsWithinReplayWindow(timestamp, Clock.GetUtcNow(), tolerance))
                return false;
        }

        var providedSignatures = SignatureHeaderFormat.ExtractSignatures(signatureHeader);
        if (providedSignatures is [])
            return false;

        var body = request.Body.ToArray();
        var message = MessageSegments.ToBytes(
            body, name => request.TryGetHeader(name, out var headerValue) ? headerValue : string.Empty);

        using var hmac = Algorithm.CreateKeyedHash(Encoding.UTF8.GetBytes(Secret));
        var expectedSignature = DigestEncoding.Encode(hmac.ComputeHash(message));

        foreach (var providedSignature in providedSignatures)
        {
            if (FixedTimeEquals(expectedSignature, providedSignature))
                return true;
        }

        return false;
    }

    private static bool IsWithinReplayWindow(string timestamp, DateTimeOffset now, TimeSpan tolerance)
    {
        if (!long.TryParse(timestamp, NumberStyles.Integer, CultureInfo.InvariantCulture, out var sentAtSeconds))
            return false;

        DateTimeOffset sentAt;
        try
        {
            sentAt = DateTimeOffset.FromUnixTimeSeconds(sentAtSeconds);
        }
        catch (ArgumentOutOfRangeException)
        {
            return false;
        }

        return sentAt >= now - tolerance && sentAt <= now + tolerance;
    }

    [MethodImpl(MethodImplOptions.NoOptimization)]
    private static bool FixedTimeEquals(string computed, string provided)
    {
        if (computed.Length != provided.Length)
            return false;

        var diff = 0;
        for (var i = 0; i < computed.Length; i++)
            diff |= computed[i] ^ provided[i];
        return diff == 0;
    }
}
