using System.Threading;
using System.Threading.Tasks;
using Bill.Core.Models;

namespace Bill.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
