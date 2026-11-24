using System.Threading;
using System.Threading.Tasks;
using Lusha.Core.Models;

namespace Lusha.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
