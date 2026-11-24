using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Identifies the part of speech that the token represents.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TagAmazonComprehendOperationsApi>))]
public sealed record TagAmazonComprehendOperationsApi : OpenStringEnum<TagAmazonComprehendOperationsApi>
{
    private TagAmazonComprehendOperationsApi(string value) : base(value)
    {
    }

    public static readonly TagAmazonComprehendOperationsApi Adj = new("ADJ");

    public static readonly TagAmazonComprehendOperationsApi Adp = new("ADP");

    public static readonly TagAmazonComprehendOperationsApi Adv = new("ADV");

    public static readonly TagAmazonComprehendOperationsApi Aux = new("AUX");

    public static readonly TagAmazonComprehendOperationsApi Conj = new("CONJ");

    public static readonly TagAmazonComprehendOperationsApi Cconj = new("CCONJ");

    public static readonly TagAmazonComprehendOperationsApi Det = new("DET");

    public static readonly TagAmazonComprehendOperationsApi Intj = new("INTJ");

    public static readonly TagAmazonComprehendOperationsApi Noun = new("NOUN");

    public static readonly TagAmazonComprehendOperationsApi Num = new("NUM");

    public static readonly TagAmazonComprehendOperationsApi O = new("O");

    public static readonly TagAmazonComprehendOperationsApi Part = new("PART");

    public static readonly TagAmazonComprehendOperationsApi Pron = new("PRON");

    public static readonly TagAmazonComprehendOperationsApi Propn = new("PROPN");

    public static readonly TagAmazonComprehendOperationsApi Punct = new("PUNCT");

    public static readonly TagAmazonComprehendOperationsApi Sconj = new("SCONJ");

    public static readonly TagAmazonComprehendOperationsApi Sym = new("SYM");

    public static readonly TagAmazonComprehendOperationsApi Verb = new("VERB");

    public TResult Match<TResult>(Func<TResult> onAdj,
        Func<TResult> onAdp,
        Func<TResult> onAdv,
        Func<TResult> onAux,
        Func<TResult> onConj,
        Func<TResult> onCconj,
        Func<TResult> onDet,
        Func<TResult> onIntj,
        Func<TResult> onNoun,
        Func<TResult> onNum,
        Func<TResult> onO,
        Func<TResult> onPart,
        Func<TResult> onPron,
        Func<TResult> onPropn,
        Func<TResult> onPunct,
        Func<TResult> onSconj,
        Func<TResult> onSym,
        Func<TResult> onVerb,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Adj => onAdj(),
            _ when this == Adp => onAdp(),
            _ when this == Adv => onAdv(),
            _ when this == Aux => onAux(),
            _ when this == Conj => onConj(),
            _ when this == Cconj => onCconj(),
            _ when this == Det => onDet(),
            _ when this == Intj => onIntj(),
            _ when this == Noun => onNoun(),
            _ when this == Num => onNum(),
            _ when this == O => onO(),
            _ when this == Part => onPart(),
            _ when this == Pron => onPron(),
            _ when this == Propn => onPropn(),
            _ when this == Punct => onPunct(),
            _ when this == Sconj => onSconj(),
            _ when this == Sym => onSym(),
            _ when this == Verb => onVerb(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdj,
        Action onAdp,
        Action onAdv,
        Action onAux,
        Action onConj,
        Action onCconj,
        Action onDet,
        Action onIntj,
        Action onNoun,
        Action onNum,
        Action onO,
        Action onPart,
        Action onPron,
        Action onPropn,
        Action onPunct,
        Action onSconj,
        Action onSym,
        Action onVerb,
        Action<string> otherwise)
    {
        if (this == Adj) onAdj();
        else if (this == Adp) onAdp();
        else if (this == Adv) onAdv();
        else if (this == Aux) onAux();
        else if (this == Conj) onConj();
        else if (this == Cconj) onCconj();
        else if (this == Det) onDet();
        else if (this == Intj) onIntj();
        else if (this == Noun) onNoun();
        else if (this == Num) onNum();
        else if (this == O) onO();
        else if (this == Part) onPart();
        else if (this == Pron) onPron();
        else if (this == Propn) onPropn();
        else if (this == Punct) onPunct();
        else if (this == Sconj) onSconj();
        else if (this == Sym) onSym();
        else if (this == Verb) onVerb();
        else otherwise(Value);
    }
}
