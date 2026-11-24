using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The name of the sticker in this story. <c>null</c> if there is no sticker.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StickerName>))]
public sealed record StickerName : OpenStringEnum<StickerName>
{
    private StickerName(string value) : base(value)
    {
    }

    public static readonly StickerName GreenCheckmark = new("green_checkmark");

    public static readonly StickerName PeopleDancing = new("people_dancing");

    public static readonly StickerName DancingUnicorn = new("dancing_unicorn");

    public static readonly StickerName Heart = new("heart");

    public static readonly StickerName PartyPopper = new("party_popper");

    public static readonly StickerName PeopleWavingFlags = new("people_waving_flags");

    public static readonly StickerName SplashingNarwhal = new("splashing_narwhal");

    public static readonly StickerName Trophy = new("trophy");

    public static readonly StickerName YetiRidingUnicorn = new("yeti_riding_unicorn");

    public static readonly StickerName CelebratingPeople = new("celebrating_people");

    public static readonly StickerName DeterminedClimbers = new("determined_climbers");

    public static readonly StickerName PhoenixSpreadingLove = new("phoenix_spreading_love");

    public TResult Match<TResult>(Func<TResult> onGreenCheckmark,
        Func<TResult> onPeopleDancing,
        Func<TResult> onDancingUnicorn,
        Func<TResult> onHeart,
        Func<TResult> onPartyPopper,
        Func<TResult> onPeopleWavingFlags,
        Func<TResult> onSplashingNarwhal,
        Func<TResult> onTrophy,
        Func<TResult> onYetiRidingUnicorn,
        Func<TResult> onCelebratingPeople,
        Func<TResult> onDeterminedClimbers,
        Func<TResult> onPhoenixSpreadingLove,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GreenCheckmark => onGreenCheckmark(),
            _ when this == PeopleDancing => onPeopleDancing(),
            _ when this == DancingUnicorn => onDancingUnicorn(),
            _ when this == Heart => onHeart(),
            _ when this == PartyPopper => onPartyPopper(),
            _ when this == PeopleWavingFlags => onPeopleWavingFlags(),
            _ when this == SplashingNarwhal => onSplashingNarwhal(),
            _ when this == Trophy => onTrophy(),
            _ when this == YetiRidingUnicorn => onYetiRidingUnicorn(),
            _ when this == CelebratingPeople => onCelebratingPeople(),
            _ when this == DeterminedClimbers => onDeterminedClimbers(),
            _ when this == PhoenixSpreadingLove => onPhoenixSpreadingLove(),
            _ => otherwise(Value)
        };

    public void Match(Action onGreenCheckmark,
        Action onPeopleDancing,
        Action onDancingUnicorn,
        Action onHeart,
        Action onPartyPopper,
        Action onPeopleWavingFlags,
        Action onSplashingNarwhal,
        Action onTrophy,
        Action onYetiRidingUnicorn,
        Action onCelebratingPeople,
        Action onDeterminedClimbers,
        Action onPhoenixSpreadingLove,
        Action<string> otherwise)
    {
        if (this == GreenCheckmark) onGreenCheckmark();
        else if (this == PeopleDancing) onPeopleDancing();
        else if (this == DancingUnicorn) onDancingUnicorn();
        else if (this == Heart) onHeart();
        else if (this == PartyPopper) onPartyPopper();
        else if (this == PeopleWavingFlags) onPeopleWavingFlags();
        else if (this == SplashingNarwhal) onSplashingNarwhal();
        else if (this == Trophy) onTrophy();
        else if (this == YetiRidingUnicorn) onYetiRidingUnicorn();
        else if (this == CelebratingPeople) onCelebratingPeople();
        else if (this == DeterminedClimbers) onDeterminedClimbers();
        else if (this == PhoenixSpreadingLove) onPhoenixSpreadingLove();
        else otherwise(Value);
    }
}
