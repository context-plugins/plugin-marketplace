using System;
using System.Collections.Generic;
using System.Linq;

namespace Clix.Core.Authentication;

internal sealed class MissingSchemes
{
    private readonly IReadOnlyList<string> _alternatives;
    private readonly bool _hasConjunction;

    private MissingSchemes(IReadOnlyList<string> alternatives, bool hasConjunction)
    {
        _alternatives = alternatives;
        _hasConjunction = hasConjunction;
    }

    public static MissingSchemes Of(IReadOnlyList<IReadOnlyList<string>> alternatives)
    {
        if (alternatives is [])
            throw new ArgumentException("At least one alternative is required.", nameof(alternatives));

        return new MissingSchemes(
            [.. alternatives.Select(alternative => alternative.JoinWith("and")).Distinct(StringComparer.Ordinal)],
            alternatives.Any(alternative => alternative.Count > 1));
    }

    public override string ToString() => _alternatives switch
    {
        [var only] when !_hasConjunction => $"the {only} scheme, which is not configured",
        [var only] => $"the {only} schemes, which are not configured",
        _ when _hasConjunction => $"{string.Join(", or ", _alternatives)}; none is configured",
        _ => $"{_alternatives.JoinWith("or")}; none is configured",
    };
}

internal static class SchemeNameExtensions
{
    extension(IReadOnlyList<string> names)
    {
        public string JoinWith(string conjunction) => names is [var only]
            ? only
            : $"{string.Join(", ", names.Take(names.Count - 1))} {conjunction} {names[^1]}";
    }
}
