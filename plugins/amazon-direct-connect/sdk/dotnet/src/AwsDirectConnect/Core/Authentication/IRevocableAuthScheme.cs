using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace AwsDirectConnect.Core.Authentication;

/// <summary>
/// Implemented by auth schemes that maintain cached credential state (e.g., an OAuth2 access token)
/// which can become invalid before its natural expiry — for example, server-side revocation,
/// suspicious-activity termination, or a scope policy change.
/// </summary>
/// <remarks>
/// When <see cref="RawClient"/> observes a <c>401 Unauthorized</c> response on a request that used
/// a revocable scheme, it calls <see cref="Invalidate"/> with that request and then retries the
/// request once, so the retry re-acquires a fresh credential instead of resending the rejected one.
/// <para>
/// The scheme drops its cached credential only when it is the one presented on the rejected
/// request, and does so under its own lock: a credential issued after the rejected one is kept,
/// and concurrent <c>401</c>s for the same credential cost a single re-acquisition.
/// </para>
/// <para>
/// Composite schemes (<c>AuthScheme.All</c>, <c>AuthScheme.Any</c>, <c>OrAnonymous()</c>) implement this interface
/// and propagate <see cref="Invalidate"/> to every revocable inner scheme; only the inner scheme
/// whose credential is on the request drops it.
/// </para>
/// </remarks>
internal interface IRevocableAuthScheme : IAuthScheme
{
    /// <summary>
    /// Drops the cached credential presented on <paramref name="rejected"/> if it is still the
    /// cached one. Safe to call concurrently and idempotently.
    /// </summary>
    ValueTask Invalidate(HttpRequestMessage rejected, CancellationToken cancellationToken);
}
