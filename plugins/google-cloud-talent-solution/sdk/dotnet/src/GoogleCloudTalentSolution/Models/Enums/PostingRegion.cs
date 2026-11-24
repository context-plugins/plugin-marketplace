using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// The job PostingRegion (for example, state, country) throughout which the job is available. If this field is set, a LocationFilter in a search query within the job region finds this job posting if an exact location match isn't specified. If this field is set to PostingRegion.NATION or PostingRegion.ADMINISTRATIVE_AREA, setting job Job.addresses to the same location level as this field is strongly recommended.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PostingRegion>))]
public sealed record PostingRegion : OpenStringEnum<PostingRegion>
{
    private PostingRegion(string value) : base(value)
    {
    }

    public static readonly PostingRegion PostingRegionUnspecified = new("POSTING_REGION_UNSPECIFIED");

    public static readonly PostingRegion AdministrativeArea = new("ADMINISTRATIVE_AREA");

    public static readonly PostingRegion Nation = new("NATION");

    public static readonly PostingRegion Telecommute = new("TELECOMMUTE");

    public TResult Match<TResult>(Func<TResult> onPostingRegionUnspecified,
        Func<TResult> onAdministrativeArea,
        Func<TResult> onNation,
        Func<TResult> onTelecommute,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PostingRegionUnspecified => onPostingRegionUnspecified(),
            _ when this == AdministrativeArea => onAdministrativeArea(),
            _ when this == Nation => onNation(),
            _ when this == Telecommute => onTelecommute(),
            _ => otherwise(Value)
        };

    public void Match(Action onPostingRegionUnspecified,
        Action onAdministrativeArea,
        Action onNation,
        Action onTelecommute,
        Action<string> otherwise)
    {
        if (this == PostingRegionUnspecified) onPostingRegionUnspecified();
        else if (this == AdministrativeArea) onAdministrativeArea();
        else if (this == Nation) onNation();
        else if (this == Telecommute) onTelecommute();
        else otherwise(Value);
    }
}
