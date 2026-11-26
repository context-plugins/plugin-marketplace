using System.Threading;
using System.Threading.Tasks;
using EinsteinBots.Core.Models;

namespace EinsteinBots.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
