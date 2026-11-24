using System.Threading;
using System.Threading.Tasks;
using CompSniper.Core.Models;

namespace CompSniper.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
