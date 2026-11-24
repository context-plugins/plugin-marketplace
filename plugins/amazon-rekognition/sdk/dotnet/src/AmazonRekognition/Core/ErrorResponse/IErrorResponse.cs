using System.Threading;
using System.Threading.Tasks;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Core.ErrorResponse;

internal interface IErrorResponse<TError>
{
    Task<TError> Map(ResponseContext context, CancellationToken cancellationToken);
}
