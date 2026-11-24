using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.AnyOf;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.UploadApi;

/// <summary>
/// The inputs of the UploadGetList operation.
/// </summary>
public sealed record UploadGetListRequest
{
    public string? TeamId { get; init; }

    public TypeBundleSocialUploadApi? Type { get; init; }

    [MaxLength(3)]
    public IReadOnlyList<TypeBundleSocialUploadApi>? Types { get; init; }

    public StatusBundleSocialUploadApi? Status { get; init; }

    [MaxLength(100)]
    public IReadOnlyList<string>? Ids { get; init; }

    [MaxLength(100)]
    public IReadOnlyList<string>? Urls { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int? Limit { get; init; }

    public IncludePosts2? IncludePosts { get; init; }

    [Minimum(0)]
    public int? Offset { get; init; } = 0;
}
