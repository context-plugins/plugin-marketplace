using System.Threading;
using System.Threading.Tasks;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
