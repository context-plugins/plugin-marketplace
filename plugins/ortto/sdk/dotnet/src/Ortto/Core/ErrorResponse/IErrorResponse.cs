using System.Threading;
using System.Threading.Tasks;
using Ortto.Core.Models;

namespace Ortto.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
