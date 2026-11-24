using System.Collections.Generic;
using DoiT.Models;
using DoiT.Models.Enums;

namespace DoiT.Requests.CloudDiagrams;

/// <summary>
/// The inputs of the GetCloudDiagramComponents operation.
/// </summary>
public sealed record GetCloudDiagramComponentsRequest
{
    /// <summary>
    /// Include components in the layer response.
    /// </summary>
    public bool? Components { get; init; }

    /// <summary>
    /// Include external (cross-diagram) components.
    /// </summary>
    public bool? External { get; init; }

    /// <summary>
    /// Include elements.
    /// </summary>
    public bool? Element { get; init; }

    /// <summary>
    /// Include links.
    /// </summary>
    public bool? Link { get; init; }

    /// <summary>
    /// Include groups.
    /// </summary>
    public bool? Group { get; init; }

    /// <summary>
    /// Include notes.
    /// </summary>
    public bool? Note { get; init; }

    /// <summary>
    /// Include combiners.
    /// </summary>
    public bool? Combiner { get; init; }

    /// <summary>
    /// Filter diagrams by type.
    /// </summary>
    public IReadOnlyList<Type10>? Type { get; init; }

    /// <summary>
    /// Filter components by node type.
    /// </summary>
    public NodeType1? NodeType { get; init; }

    /// <summary>
    /// Include alarm counts (default true).
    /// </summary>
    public bool? AlarmsCount { get; init; }

    /// <summary>
    /// Include issue counts.
    /// </summary>
    public bool? IssuesCount { get; init; }

    /// <summary>
    /// Omit diagrams that have no components.
    /// </summary>
    public bool? SkipEmpty { get; init; }

    /// <summary>
    /// Exclude the default VPC group (default true).
    /// </summary>
    public bool? ExcludeDefaultVpc { get; init; }

    /// <summary>
    /// Exclude empty subnet groups (default true).
    /// </summary>
    public bool? ExcludeEmptySubnets { get; init; }

    public CloudDiagramsGetRequest? Body { get; init; }
}
