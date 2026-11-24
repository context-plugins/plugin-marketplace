namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Passwordgenerator operation.
/// </summary>
public sealed record PasswordgeneratorRequest
{
    /// <summary>
    /// The number of passwords to generate
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// The length of the password to generate
    /// </summary>
    public int? Length { get; init; }

    /// <summary>
    /// The complexity of the password. Only applies when type is random
    /// </summary>
    public string? Complexity { get; init; }

    /// <summary>
    /// The kind of password to generate. random uses the complexity preset, pronounceable builds readable syllables, passphrase joins dictionary words, and custom honours the include/exclude switches below
    /// </summary>
    public string? Type { get; init; }

    /// <summary>
    /// Include digits. Applies to custom and pronounceable, and to random at simple complexity
    /// </summary>
    public bool? IncludeNumbers { get; init; }

    /// <summary>
    /// Include punctuation symbols. Applies to custom, and to random at medium complexity
    /// </summary>
    public bool? IncludeSymbols { get; init; }

    /// <summary>
    /// Include uppercase letters. Applies to custom, and to random at simple complexity
    /// </summary>
    public bool? IncludeUppercase { get; init; }

    /// <summary>
    /// Include lowercase letters in a custom password. Set false to build from the other character sets only
    /// </summary>
    public bool? IncludeLowercase { get; init; }

    /// <summary>
    /// Exclude characters that are easy to confuse when read aloud or typed (i, l, 1, L, o, 0, O)
    /// </summary>
    public bool? ExcludeSimilar { get; init; }

    /// <summary>
    /// Exclude brackets, slashes, quotes and other characters that need escaping in shells and config files
    /// </summary>
    public bool? ExcludeAmbiguous { get; init; }

    /// <summary>
    /// Randomly capitalise letters in a pronounceable password
    /// </summary>
    public bool? MixedCase { get; init; }

    /// <summary>
    /// Guarantee at least one character from every enabled set rather than leaving it to chance
    /// </summary>
    public bool? Strict { get; init; }

    /// <summary>
    /// How many words a passphrase contains. Only applies when type is passphrase
    /// </summary>
    public int? WordCount { get; init; }

    /// <summary>
    /// The character placed between passphrase words. Only applies when type is passphrase
    /// </summary>
    public string? Separator { get; init; }

    /// <summary>
    /// Capitalise each word of a passphrase. Only applies when type is passphrase
    /// </summary>
    public bool? Capitalize { get; init; }

    /// <summary>
    /// Return a strength analysis alongside each password
    /// </summary>
    public bool? Analyze { get; init; }
}
