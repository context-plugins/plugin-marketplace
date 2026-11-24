using System.Threading;
using System.Threading.Tasks;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
