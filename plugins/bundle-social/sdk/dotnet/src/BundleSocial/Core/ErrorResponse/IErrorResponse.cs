using System.Threading;
using System.Threading.Tasks;
using BundleSocial.Core.Models;

namespace BundleSocial.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
