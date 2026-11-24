using CarsXe.Models.Enums;

namespace CarsXe.Requests.Images;

/// <summary>
/// The inputs of the GetVehicleImages operation.
/// </summary>
public sealed record GetVehicleImagesRequest
{
    /// <summary>
    /// The vehicle make.
    /// </summary>
    public required string Make { get; init; }

    /// <summary>
    /// The vehicle model.
    /// </summary>
    public required string Model { get; init; }

    /// <summary>
    /// The vehicle year.
    /// </summary>
    public string? Year { get; init; }

    /// <summary>
    /// The vehicle trim.
    /// </summary>
    public string? Trim { get; init; }

    /// <summary>
    /// The vehicle color.
    /// </summary>
    public string? Color { get; init; }

    /// <summary>
    /// Prioritize images with transparent background. Defaults to <c>true</c>.
    /// </summary>
    public bool? Transparent { get; init; }

    /// <summary>
    /// The angle to show the car in.
    /// </summary>
    public Angle? Angle { get; init; }

    /// <summary>
    /// Request images of the interior, exterior or engine. Can only be used in conjunction with year, make, model and trim query params.
    /// </summary>
    public PhotoType? PhotoType { get; init; }

    /// <summary>
    /// Request images of a given size. Defaults to all sizes.
    /// </summary>
    public Size? Size { get; init; }

    /// <summary>
    /// Filter images by license type. Leave blank to return all images.
    /// </summary>
    public License? License { get; init; }

    /// <summary>
    /// The format of the response. One of <c>json</c> or <c>xml</c>.
    /// </summary>
    public Format Format { get; init; } = Format.Json;
}
