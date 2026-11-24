using System.Threading;
using System.Threading.Tasks;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
