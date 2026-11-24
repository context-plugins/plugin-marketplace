using System.Threading;
using System.Threading.Tasks;
using CarsXe.Core.Models;

namespace CarsXe.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
