using Archbee.Core.Models;
using Archbee.Models.Enums;

namespace Archbee.Requests.ApiReference;

/// <summary>
/// The inputs of the SyncOpenApiDocument operation.
/// </summary>
public sealed record SyncOpenApiDocumentRequest
{
    /// <summary>
    /// Open api file, .json or .yml or .yaml or .zip
    /// </summary>
    public required BinaryContent File { get; init; }

    /// <summary>
    /// OPTIONAL, main category id where open api was imported; if undefined, a new docTree is created and its id is returned
    /// </summary>
    public string DocTreeId { get; init; } = "21-character__string0";

    /// <summary>
    /// Type of import file. Default openapi
    /// </summary>
    public TypeEnum Type { get; init; } = TypeEnum.Openapi;

    /// <summary>
    /// OPTIONAL. You can now test your API's directly in the editor or on your published docs with the new API Try It!
    /// </summary>
    public OpenApiTryIt? OpenApiTryIt { get; init; }

    /// <summary>
    /// OPTIONAL. When 'Try It' is enabled, send requests directly from the browser to the URL defined in the OpenAPI spec instead of proxying through Archbee. Requires CORS configured on your backend.
    /// </summary>
    public OpenApiUseOwnBackend? OpenApiUseOwnBackend { get; init; }

    /// <summary>
    /// OPTIONAL. You can show/hide the download link of the imported Open API file in the Open API tree.
    /// </summary>
    public ShowDownloadOpenApiFile? ShowDownloadOpenApiFile { get; init; }

    /// <summary>
    /// OPTIONAL. You can create models category to display all your models.
    /// </summary>
    public ShouldCreateSchemaCategory? ShouldCreateSchemaCategory { get; init; }

    /// <summary>
    /// OPTIONAL. You can create an additional document to display open api intro.
    /// </summary>
    public ShouldCreateIntro? ShouldCreateIntro { get; init; }

    /// <summary>
    /// OPTIONAL. Add your custom language examples. Maximum 5 programming language examples are allowed!
    /// </summary>
    public string? OpenApiLanguageExamples { get; init; }
}
