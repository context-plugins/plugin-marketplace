using System.Threading;
using System.Threading.Tasks;
using Buildkite.Core.Models;

namespace Buildkite.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
