using Audioscrape.Models;

namespace Audioscrape.Requests.Items;

/// <summary>
/// The inputs of the UploadItemExternal operation.
/// </summary>
public sealed record UploadItemExternalRequest
{
    /// <summary>
    /// Numeric dataset ID. Caller must be a member of the dataset's parent library.
    /// </summary>
    public required long Id { get; init; }

    /// <summary>
    /// <b>This endpoint accepts TWO content types — pick one based on where the audio lives:</b>
    /// <list type="number">
    ///   <item><description><b><c>application/json</c></b> (documented schema below) — body shape <c>{ "audio_url": "https://...", "title": "...", "description": "..." }</c>. Use this when the audio is already hosted at a public HTTPS URL.</description></item>
    /// </list>
    /// <list type="number">
    ///   <item><description><b><c>multipart/form-data</c></b> (NOT shown in the schema above — utoipa can only render one content type per operation, but the server accepts both). Send a multipart body with these parts: <c>audio</c> (the audio file, required), <c>title</c> (text, optional), <c>description</c> (text, optional). Use this for direct file uploads from a browser or local script.</description></item>
    /// </list>
    /// <para>
    /// Both content types hit the same handler, write to the same storage, and produce the same <c>item_id</c>.
    /// </para>
    /// </summary>
    public required UploadFromUrl Body { get; init; }
}
