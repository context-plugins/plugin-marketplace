using System.Text.Json.Serialization;
using Cloro.Core.Validation;
using Cloro.Core.Validation.Attributes;

namespace Cloro.Models;

public record GoogleGotoRequest
{
    /// <summary>
    /// The Google redirect link to resolve, as an absolute URL. Must be a <c>google.com</c> or <c>www.google.com</c> link with a <c>/goto</c> or <c>/url</c> path — the form shipped as <c>redirectLink</c> beside every resolved link on Google Search, Google News, and AI Mode responses.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }
}
