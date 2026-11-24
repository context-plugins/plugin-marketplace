using System.Security.Cryptography;

namespace Surfe.Core.Webhooks.Signing;

internal abstract record SignatureAlgorithm
{
    internal abstract HMAC CreateKeyedHash(byte[] secretKey);

    internal sealed record Sha256 : SignatureAlgorithm
    {
        internal override HMAC CreateKeyedHash(byte[] secretKey) => new HMACSHA256(secretKey);
    }

    internal sealed record Sha512 : SignatureAlgorithm
    {
        internal override HMAC CreateKeyedHash(byte[] secretKey) => new HMACSHA512(secretKey);
    }
}
