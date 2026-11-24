using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Semrush.Core.Models;

namespace Semrush.Models;

/// <summary>
/// An object describes user status, related to the app
/// </summary>
public record DataSemrushPartnerServiceApi
{
    /// <summary>
    /// Shows if the app's main product is active
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_main_product_active")]
    public bool? IsMainProductActive { get; init; }

    /// <summary>
    /// Shows if the app is taken for free
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_app_taken_for_free")]
    public bool? IsAppTakenForFree { get; init; }

    /// <summary>
    /// true if a user can activate trial for app's main product
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_main_product_trial_available")]
    public bool? IsMainProductTrialAvailable { get; init; }

    /// <summary>
    /// All app's products ids, for which user can activate trial
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_trials_available")]
    public IReadOnlyList<Guid>? ProductTrialsAvailable { get; init; }

    /// <summary>
    /// List of user's in-app purchases (bought products)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active_products")]
    [MinLength(0)]
    public IReadOnlyList<ViewerActiveProduct>? ActiveProducts { get; init; }

    /// <summary>
    /// Reserved for future use
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extra_user_data")]
    public object? ExtraUserData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
