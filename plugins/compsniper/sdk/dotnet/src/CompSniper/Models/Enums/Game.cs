using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Game to list every set for
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Game>))]
public sealed record Game : OpenStringEnum<Game>
{
    private Game(string value) : base(value)
    {
    }

    public static readonly Game Pokemon = new("pokemon");

    public static readonly Game OnePiece = new("one-piece");

    public static readonly Game Magic = new("magic");

    public static readonly Game Yugioh = new("yugioh");

    public static readonly Game DragonBall = new("dragon-ball");

    public static readonly Game Lorcana = new("lorcana");

    public static readonly Game Digimon = new("digimon");

    public static readonly Game WeissSchwarz = new("weiss-schwarz");

    public static readonly Game UnionArena = new("union-arena");

    public static readonly Game FleshAndBlood = new("flesh-and-blood");

    public static readonly Game StarWarsUnlimited = new("star-wars-unlimited");

    public static readonly Game CardfightVanguard = new("cardfight-vanguard");

    public static readonly Game DuelMasters = new("duel-masters");

    public static readonly Game BattleSpirits = new("battle-spirits");

    public static readonly Game FinalFantasy = new("final-fantasy");

    public static readonly Game Gundam = new("gundam");

    public static readonly Game Shadowverse = new("shadowverse");

    public static readonly Game Riftbound = new("riftbound");

    public static readonly Game GrandArchive = new("grand-archive");

    public static readonly Game Wixoss = new("wixoss");

    public TResult Match<TResult>(Func<TResult> onPokemon,
        Func<TResult> onOnePiece,
        Func<TResult> onMagic,
        Func<TResult> onYugioh,
        Func<TResult> onDragonBall,
        Func<TResult> onLorcana,
        Func<TResult> onDigimon,
        Func<TResult> onWeissSchwarz,
        Func<TResult> onUnionArena,
        Func<TResult> onFleshAndBlood,
        Func<TResult> onStarWarsUnlimited,
        Func<TResult> onCardfightVanguard,
        Func<TResult> onDuelMasters,
        Func<TResult> onBattleSpirits,
        Func<TResult> onFinalFantasy,
        Func<TResult> onGundam,
        Func<TResult> onShadowverse,
        Func<TResult> onRiftbound,
        Func<TResult> onGrandArchive,
        Func<TResult> onWixoss,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pokemon => onPokemon(),
            _ when this == OnePiece => onOnePiece(),
            _ when this == Magic => onMagic(),
            _ when this == Yugioh => onYugioh(),
            _ when this == DragonBall => onDragonBall(),
            _ when this == Lorcana => onLorcana(),
            _ when this == Digimon => onDigimon(),
            _ when this == WeissSchwarz => onWeissSchwarz(),
            _ when this == UnionArena => onUnionArena(),
            _ when this == FleshAndBlood => onFleshAndBlood(),
            _ when this == StarWarsUnlimited => onStarWarsUnlimited(),
            _ when this == CardfightVanguard => onCardfightVanguard(),
            _ when this == DuelMasters => onDuelMasters(),
            _ when this == BattleSpirits => onBattleSpirits(),
            _ when this == FinalFantasy => onFinalFantasy(),
            _ when this == Gundam => onGundam(),
            _ when this == Shadowverse => onShadowverse(),
            _ when this == Riftbound => onRiftbound(),
            _ when this == GrandArchive => onGrandArchive(),
            _ when this == Wixoss => onWixoss(),
            _ => otherwise(Value)
        };

    public void Match(Action onPokemon,
        Action onOnePiece,
        Action onMagic,
        Action onYugioh,
        Action onDragonBall,
        Action onLorcana,
        Action onDigimon,
        Action onWeissSchwarz,
        Action onUnionArena,
        Action onFleshAndBlood,
        Action onStarWarsUnlimited,
        Action onCardfightVanguard,
        Action onDuelMasters,
        Action onBattleSpirits,
        Action onFinalFantasy,
        Action onGundam,
        Action onShadowverse,
        Action onRiftbound,
        Action onGrandArchive,
        Action onWixoss,
        Action<string> otherwise)
    {
        if (this == Pokemon) onPokemon();
        else if (this == OnePiece) onOnePiece();
        else if (this == Magic) onMagic();
        else if (this == Yugioh) onYugioh();
        else if (this == DragonBall) onDragonBall();
        else if (this == Lorcana) onLorcana();
        else if (this == Digimon) onDigimon();
        else if (this == WeissSchwarz) onWeissSchwarz();
        else if (this == UnionArena) onUnionArena();
        else if (this == FleshAndBlood) onFleshAndBlood();
        else if (this == StarWarsUnlimited) onStarWarsUnlimited();
        else if (this == CardfightVanguard) onCardfightVanguard();
        else if (this == DuelMasters) onDuelMasters();
        else if (this == BattleSpirits) onBattleSpirits();
        else if (this == FinalFantasy) onFinalFantasy();
        else if (this == Gundam) onGundam();
        else if (this == Shadowverse) onShadowverse();
        else if (this == Riftbound) onRiftbound();
        else if (this == GrandArchive) onGrandArchive();
        else if (this == Wixoss) onWixoss();
        else otherwise(Value);
    }
}
