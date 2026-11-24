using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core;
using ApiVerve.Core.Exceptions;
using ApiVerve.Core.Models;
using ApiVerve.Core.Request;
using ApiVerve.Core.Response;
using ApiVerve.Errors;
using ApiVerve.Models;
using ApiVerve.Requests.Games;

namespace ApiVerve.Api;

public sealed class Games
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Games(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Acrostic Puzzle Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AcrosticResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AcrosticError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an acrostic puzzle
    /// </remarks>
    public Task<V1AcrosticResponse> Acrostic(AcrosticRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/acrostic"),
            [],
            [new Param("word", request.Word), new Param("theme", request.Theme), new Param("image", request.Image)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AcrosticResponse>(),
            AcrosticError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Anagram Puzzle Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AnagrampuzzleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnagrampuzzleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create anagram puzzles
    /// </remarks>
    public Task<V1AnagrampuzzleResponse> Anagrampuzzle(AnagrampuzzleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/anagrampuzzle"),
            [],
            [
                new Param("word", request.Word),
                new Param("count", request.Count),
                new Param("difficulty", request.Difficulty),
                new Param("image", request.Image),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AnagrampuzzleResponse>(),
            AnagrampuzzleError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Card Deck Shuffler
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CarddeckshufflerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CarddeckshufflerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Shuffle one or more standard card decks with optional jokers
    /// </remarks>
    public Task<V1CarddeckshufflerResponse> Carddeckshuffler(CarddeckshufflerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/carddeckshuffler"),
            [],
            [
                new Param("decks", request.Decks),
                new Param("jokers", request.Jokers),
                new Param("method", request.Method),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CarddeckshufflerResponse>(),
            CarddeckshufflerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Coin Flipper
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CoinflipperResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CoinflipperError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Flip one or more coins and get detailed results
    /// </remarks>
    public Task<V1CoinflipperResponse> Coinflipper(CoinflipperRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/coinflipper"),
            [],
            [new Param("flips", request.Flips)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CoinflipperResponse>(),
            CoinflipperError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Crossword Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CrosswordResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CrosswordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a crossword puzzle
    /// </remarks>
    public Task<V1CrosswordResponse> Crossword(CrosswordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/crossword"),
            [],
            [
                new Param("size", request.Size),
                new Param("theme", request.Theme),
                new Param("difficulty", request.Difficulty),
                new Param("image", request.Image),
                new Param("solutionImage", request.SolutionImage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CrosswordResponse>(),
            CrosswordError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cryptogram Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CryptogramResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CryptogramError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a cryptogram puzzle
    /// </remarks>
    public Task<V1CryptogramResponse> Cryptogram(CryptogramRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/cryptogram"),
            [],
            [
                new Param("text", request.Text),
                new Param("random", request.Random),
                new Param("image", request.Image),
                new Param("solutionImage", request.SolutionImage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CryptogramResponse>(),
            CryptogramError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Dice Roller
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DicerollerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DicerollerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Roll dice using XdY notation with optional modifier
    /// </remarks>
    public Task<V1DicerollerResponse> Diceroller(DicerollerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/diceroller"),
            [],
            [new Param("dice", request.Dice), new Param("modifier", request.Modifier)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DicerollerResponse>(),
            DicerollerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fill in the Blanks Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1FillintheblanksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FillintheblanksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create fill in the blank puzzles
    /// </remarks>
    public Task<V1FillintheblanksResponse> Fillintheblanks(FillintheblanksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/fillintheblanks"),
            [],
            [
                new Param("category", request.Category),
                new Param("count", request.Count),
                new Param("difficulty", request.Difficulty),
                new Param("image", request.Image),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1FillintheblanksResponse>(),
            FillintheblanksError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fortune Cookie Generator
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1FortunecookieResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FortunecookieError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate fortune cookie messages with lucky numbers
    /// </remarks>
    public Task<V1FortunecookieResponse> Fortunecookie(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/fortunecookie"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1FortunecookieResponse>(),
            FortunecookieError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Game Character Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1GamecharacterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GamecharacterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a random RPG character
    /// </remarks>
    public Task<V1GamecharacterResponse> Gamecharacter(GamecharacterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/gamecharacter"),
            [],
            [new Param("race", request.Race), new Param("class", request.Class)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1GamecharacterResponse>(),
            GamecharacterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Hangman Word Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HangmanwordResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HangmanwordError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get random words for hangman
    /// </remarks>
    public Task<V1HangmanwordResponse> Hangmanword(HangmanwordRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/hangmanword"),
            [],
            [
                new Param("category", request.Category),
                new Param("difficulty", request.Difficulty),
                new Param("count", request.Count),
                new Param("image", request.Image),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1HangmanwordResponse>(),
            HangmanwordError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Lottery Number Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LotterypickerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LotterypickerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate random lottery numbers for various games
    /// </remarks>
    public Task<V1LotterypickerResponse> Lotterypicker(LotterypickerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/lotterypicker"),
            [],
            [
                new Param("game", request.Game),
                new Param("numbers", request.Numbers),
                new Param("max", request.Max),
                new Param("bonus", request.Bonus),
                new Param("tickets", request.Tickets),
                new Param("bonusmax", request.Bonusmax),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1LotterypickerResponse>(),
            LotterypickerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Mad Libs Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MadlibsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MadlibsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get mad libs story templates
    /// </remarks>
    public Task<V1MadlibsResponse> Madlibs(MadlibsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/madlibs"),
            [],
            [new Param("category", request.Category), new Param("count", request.Count)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MadlibsResponse>(),
            MadlibsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Maze Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MazeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MazeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a maze puzzle
    /// </remarks>
    public Task<V1MazeResponse> Maze(MazeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/maze"),
            [],
            [
                new Param("width", request.Width),
                new Param("height", request.Height),
                new Param("difficulty", request.Difficulty),
                new Param("image", request.Image),
                new Param("solutionImage", request.SolutionImage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MazeResponse>(),
            MazeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Rock Paper Scissors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RockpaperscissorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RockpaperscissorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Play rounds of Rock Paper Scissors with outcome analysis
    /// </remarks>
    public Task<V1RockpaperscissorsResponse> Rockpaperscissors(RockpaperscissorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/rockpaperscissors"),
            [],
            [new Param("choice", request.Choice), new Param("rounds", request.Rounds)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RockpaperscissorsResponse>(),
            RockpaperscissorsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Slot Machine Simulator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SlotmachineResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SlotmachineError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Simulate slot machine spins with configurable reels and bet amounts
    /// </remarks>
    public Task<V1SlotmachineResponse> Slotmachine(SlotmachineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/slotmachine"),
            [],
            [new Param("spins", request.Spins), new Param("reels", request.Reels), new Param("bet", request.Bet)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SlotmachineResponse>(),
            SlotmachineError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Spelling Bee Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SpellingbeeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpellingbeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a spelling bee puzzle
    /// </remarks>
    public Task<V1SpellingbeeResponse> Spellingbee(SpellingbeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/spellingbee"),
            [],
            [new Param("difficulty", request.Difficulty), new Param("image", request.Image)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SpellingbeeResponse>(),
            SpellingbeeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Superhero Name Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SuperheronameResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SuperheronameError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a random superhero name
    /// </remarks>
    public Task<V1SuperheronameResponse> Superheroname(SuperheronameRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/superheroname"),
            [],
            [new Param("style", request.Style)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SuperheronameResponse>(),
            SuperheronameError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Word Ladder Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WordladderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WordladderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create word ladder puzzles
    /// </remarks>
    public Task<V1WordladderResponse> Wordladder(WordladderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/wordladder"),
            [],
            [
                new Param("start", request.Start),
                new Param("end", request.End),
                new Param("difficulty", request.Difficulty),
                new Param("count", request.Count),
                new Param("image", request.Image),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WordladderResponse>(),
            WordladderError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Word Scramble Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WordscrambleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WordscrambleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create scrambled word puzzles
    /// </remarks>
    public Task<V1WordscrambleResponse> Wordscramble(WordscrambleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/wordscramble"),
            [],
            [
                new Param("difficulty", request.Difficulty),
                new Param("count", request.Count),
                new Param("image", request.Image),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WordscrambleResponse>(),
            WordscrambleError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Word Search Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WordsearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WordsearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a word search puzzle with custom words
    /// </remarks>
    public Task<V1WordsearchResponse> Wordsearch(WordsearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/wordsearch"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1WordsearchResponse>(),
            WordsearchError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
