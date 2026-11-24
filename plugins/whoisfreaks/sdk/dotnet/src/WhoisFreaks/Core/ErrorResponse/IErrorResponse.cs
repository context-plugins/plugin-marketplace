using System.Threading;
using System.Threading.Tasks;
using WhoisFreaks.Core.Models;

namespace WhoisFreaks.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
