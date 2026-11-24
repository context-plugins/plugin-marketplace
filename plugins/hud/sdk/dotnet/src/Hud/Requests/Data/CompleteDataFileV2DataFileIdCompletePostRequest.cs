using System;

namespace Hud.Requests.Data;

/// <summary>
/// The inputs of the CompleteDataFileV2DataFileIdCompletePost operation.
/// </summary>
public sealed record CompleteDataFileV2DataFileIdCompletePostRequest
{
    public required Guid FileId { get; init; }
}
