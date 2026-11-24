using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Identifies the part of speech that the token represents.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Tag2>))]
public sealed record Tag2 : OpenStringEnum<Tag2>
{
    private Tag2(string value) : base(value)
    {
    }

    public static readonly Tag2 Adj = new("ADJ");

    public static readonly Tag2 Adp = new("ADP");

    public static readonly Tag2 Adv = new("ADV");

    public static readonly Tag2 Aux = new("AUX");

    public static readonly Tag2 Conj = new("CONJ");

    public static readonly Tag2 Cconj = new("CCONJ");

    public static readonly Tag2 Det = new("DET");

    public static readonly Tag2 Intj = new("INTJ");

    public static readonly Tag2 Noun = new("NOUN");

    public static readonly Tag2 Num = new("NUM");

    public static readonly Tag2 O = new("O");

    public static readonly Tag2 Part = new("PART");

    public static readonly Tag2 Pron = new("PRON");

    public static readonly Tag2 Propn = new("PROPN");

    public static readonly Tag2 Punct = new("PUNCT");

    public static readonly Tag2 Sconj = new("SCONJ");

    public static readonly Tag2 Sym = new("SYM");

    public static readonly Tag2 Verb = new("VERB");

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
