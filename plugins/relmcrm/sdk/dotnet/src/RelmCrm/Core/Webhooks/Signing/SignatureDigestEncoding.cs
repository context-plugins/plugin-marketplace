using System;

namespace RelmCrm.Core.Webhooks.Signing;

internal abstract record SignatureDigestEncoding
{
    internal abstract string Encode(byte[] mac);

    public sealed record Hex : SignatureDigestEncoding
    {
        internal override string Encode(byte[] mac) =>
            BitConverter.ToString(mac).Replace("-", string.Empty).ToLowerInvariant();
    }

    public sealed record Base64 : SignatureDigestEncoding
    {
        internal override string Encode(byte[] mac) => Convert.ToBase64String(mac);
    }

    public sealed record Base64Url : SignatureDigestEncoding
    {
        internal override string Encode(byte[] mac) =>
            Convert.ToBase64String(mac).Replace('+', '-').Replace('/', '_').TrimEnd('=');
    }
}
