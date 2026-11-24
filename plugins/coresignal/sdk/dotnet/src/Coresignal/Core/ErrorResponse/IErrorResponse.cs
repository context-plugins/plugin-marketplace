using System.Threading;
using System.Threading.Tasks;
using Coresignal.Core.Models;

namespace Coresignal.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
