using System.Threading;
using System.Threading.Tasks;

namespace ParallelSdk.Core.Authentication;

public delegate ValueTask<T?> CredentialProvider<T>(CancellationToken cancellationToken) where T : class;

internal static class CredentialProvider
{
    public static CredentialProvider<T>? Constant<T>(T? value) where T : class =>
        value is null ? null : _ => new ValueTask<T?>(value);
}
