using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// How the use came to the register: built in-house, a supplier's AI, a feature in a service, a proof of concept, or found in use
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntryType>))]
public sealed record EntryType : OpenStringEnum<EntryType>
{
    private EntryType(string value) : base(value)
    {
    }

    public static readonly EntryType InternalBuild = new("internal_build");

    public static readonly EntryType SupplierAi = new("supplier_ai");

    public static readonly EntryType FeatureInService = new("feature_in_service");

    public static readonly EntryType ProofOfConcept = new("proof_of_concept");

    public static readonly EntryType Discovered = new("discovered");

    public TResult Match<TResult>(Func<TResult> onInternalBuild,
        Func<TResult> onSupplierAi,
        Func<TResult> onFeatureInService,
        Func<TResult> onProofOfConcept,
        Func<TResult> onDiscovered,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InternalBuild => onInternalBuild(),
            _ when this == SupplierAi => onSupplierAi(),
            _ when this == FeatureInService => onFeatureInService(),
            _ when this == ProofOfConcept => onProofOfConcept(),
            _ when this == Discovered => onDiscovered(),
            _ => otherwise(Value)
        };

    public void Match(Action onInternalBuild,
        Action onSupplierAi,
        Action onFeatureInService,
        Action onProofOfConcept,
        Action onDiscovered,
        Action<string> otherwise)
    {
        if (this == InternalBuild) onInternalBuild();
        else if (this == SupplierAi) onSupplierAi();
        else if (this == FeatureInService) onFeatureInService();
        else if (this == ProofOfConcept) onProofOfConcept();
        else if (this == Discovered) onDiscovered();
        else otherwise(Value);
    }
}
