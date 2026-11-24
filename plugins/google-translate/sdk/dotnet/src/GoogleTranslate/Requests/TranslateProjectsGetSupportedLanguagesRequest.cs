namespace GoogleTranslate.Requests;

/// <summary>
/// The inputs of the TranslateProjectsGetSupportedLanguages operation.
/// </summary>
public sealed record TranslateProjectsGetSupportedLanguagesRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.
    /// </summary>
    public string? DisplayLanguageCode { get; init; }

    /// <summary>
    /// Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: <c>projects/{project-number-or-id}/locations/{location-id}/models/{model-id}</c> - General (built-in) models: <c>projects/{project-number-or-id}/locations/{location-id}/models/general/nmt</c>, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model.
    /// </summary>
    public string? Model { get; init; }
}
