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
using ApiVerve.Requests.Entertainment;

namespace ApiVerve.Api;

public sealed class Entertainment
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Entertainment(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Advice Generator
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AdviceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AdviceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Advice Generator is a simple tool for generating random pieces of advice. It returns a random piece of advice.
    /// </remarks>
    public Task<V1AdviceResponse> Advice(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/advice"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AdviceResponse>(),
            AdviceError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bucket List
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BucketlistResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BucketlistError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Bucket List is a simple tool for getting a random bucket list item. It returns a random bucket list item
    /// </remarks>
    public Task<V1BucketlistResponse> Bucketlist(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/bucketlist"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BucketlistResponse>(),
            BucketlistError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Charades Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CharadesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CharadesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate random charades word from category
    /// </remarks>
    public Task<V1CharadesResponse> Charades(CharadesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/charades"),
            [],
            [new Param("category", request.Category)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CharadesResponse>(),
            CharadesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Chess Move Validator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ChessmovevalidatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ChessmovevalidatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate algebraic chess notation
    /// </remarks>
    public Task<V1ChessmovevalidatorResponse> Chessmovevalidator(ChessmovevalidatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/chessmovevalidator"),
            [],
            [new Param("move", request.Move)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ChessmovevalidatorResponse>(),
            ChessmovevalidatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Chuck Norris Jokes
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ChucknorrisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ChucknorrisError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a random Chuck Norris joke
    /// </remarks>
    public Task<V1ChucknorrisResponse> Chucknorris(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/chucknorris"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ChucknorrisResponse>(),
            ChucknorrisError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Compliment Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ComplimentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ComplimentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a unique compliment
    /// </remarks>
    public Task<V1ComplimentsResponse> Compliments(ComplimentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/compliments"),
            [],
            [new Param("adult", request.Adult)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ComplimentsResponse>(),
            ComplimentsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Dad Jokes
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DadjokesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DadjokesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Dad Jokes is a simple tool for getting dad jokes. It returns a random dad joke.
    /// </remarks>
    public Task<V1DadjokesResponse> Dadjokes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/dadjokes"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DadjokesResponse>(),
            DadjokesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// D&amp;D Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DndgeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DndgeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate random D&amp;D content by type
    /// </remarks>
    public Task<V1DndgeneratorResponse> Dndgenerator(DndgeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/dndgenerator"),
            [],
            [new Param("type", request.Type), new Param("count", request.Count)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DndgeneratorResponse>(),
            DndgeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fortune Teller
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1FortunetellerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FortunetellerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate personalized AI fortune with insights and lucky elements
    /// </remarks>
    public Task<V1FortunetellerResponse> Fortuneteller(FortunetellerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/fortuneteller"),
            [],
            [new Param("category", request.Category), new Param("question", request.Question)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1FortunetellerResponse>(),
            FortunetellerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Historical Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HistoricaleventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HistoricaleventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of historical events that match a specific keyword
    /// </remarks>
    public Task<V1HistoricaleventsResponse> Historicalevents(HistoricaleventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/historicalevents"),
            [],
            [new Param("text", request.Text)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1HistoricaleventsResponse>(),
            HistoricaleventsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Love Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LovecalculatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LovecalculatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate the love compatibility between two names
    /// </remarks>
    public Task<V1LovecalculatorResponse> Lovecalculator(LovecalculatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/lovecalculator"),
            [],
            [new Param("name1", request.Name1), new Param("name2", request.Name2)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1LovecalculatorResponse>(),
            LovecalculatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Magic 8-Ball
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1Magic8BallResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Magic8BallError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a random Magic 8-Ball prediction
    /// </remarks>
    public Task<V1Magic8BallResponse> Magic8Ball(Magic8BallRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/magic8ball"),
            [],
            [new Param("question", request.Question)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1Magic8BallResponse>(),
            Magic8BallError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Music Note Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MusicnotegeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MusicnotegeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate audio file for musical note
    /// </remarks>
    public Task<V1MusicnotegeneratorResponse> Musicnotegenerator(MusicnotegeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/musicnotegenerator"),
            [],
            [
                new Param("note", request.Note),
                new Param("octave", request.Octave),
                new Param("duration", request.Duration),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MusicnotegeneratorResponse>(),
            MusicnotegeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Never Have I Ever
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1NeverhaveieverResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NeverhaveieverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a Never Have I Ever statement
    /// </remarks>
    public Task<V1NeverhaveieverResponse> Neverhaveiever(NeverhaveieverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/neverhaveiever"),
            [],
            [new Param("adult", request.Adult)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1NeverhaveieverResponse>(),
            NeverhaveieverError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Pictionary Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PictionaryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PictionaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate pictionary words by difficulty level
    /// </remarks>
    public Task<V1PictionaryResponse> Pictionary(PictionaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/pictionary"),
            [],
            [new Param("difficulty", request.Difficulty), new Param("count", request.Count)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PictionaryResponse>(),
            PictionaryError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Random Facts
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RandomfactsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RandomfactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a random fact
    /// </remarks>
    public Task<V1RandomfactsResponse> Randomfacts(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/randomfacts"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RandomfactsResponse>(),
            RandomfactsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Random Joke
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RandomjokeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RandomjokeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a random joke from a collection of jokes
    /// </remarks>
    public Task<V1RandomjokeResponse> Randomjoke(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/randomjoke"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RandomjokeResponse>(),
            RandomjokeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Random Pun
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RandompunResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RandompunError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a random pun from a collection of puns
    /// </remarks>
    public Task<V1RandompunResponse> Randompun(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/randompun"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RandompunResponse>(),
            RandompunError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Random Quote
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RandomquoteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RandomquoteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a random quote from a collection of quotes
    /// </remarks>
    public Task<V1RandomquoteResponse> Randomquote(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/randomquote"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RandomquoteResponse>(),
            RandomquoteError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Scrabble Word Scorer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ScrabblescorerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ScrabblescorerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate Scrabble points for a word
    /// </remarks>
    public Task<V1ScrabblescorerResponse> Scrabblescorer(ScrabblescorerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/scrabblescorer"),
            [],
            [new Param("word", request.Word), new Param("language", request.Language)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ScrabblescorerResponse>(),
            ScrabblescorerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sudoku Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SudokuResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SudokuError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sudoku is a simple tool for generating Sudoku puzzles. It returns a Sudoku puzzle.
    /// </remarks>
    public Task<V1SudokuResponse> Sudoku(SudokuRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/sudoku"),
            [],
            [new Param("difficulty", request.Difficulty)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SudokuResponse>(),
            SudokuError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trivia Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TriviaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriviaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a random trivia question
    /// </remarks>
    public Task<V1TriviaResponse> Trivia(TriviaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/trivia"),
            [],
            [new Param("category", request.Category)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TriviaResponse>(),
            TriviaError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Truth or Dare
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TruthordareResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TruthordareError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a truth or dare prompt
    /// </remarks>
    public Task<V1TruthordareResponse> Truthordare(TruthordareRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/truthordare"),
            [],
            [new Param("type", request.Type), new Param("adult", request.Adult)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TruthordareResponse>(),
            TruthordareError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Wordle Helper
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WordlehelperResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WordlehelperError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find possible Wordle solutions based on clues
    /// </remarks>
    public Task<V1WordlehelperResponse> Wordlehelper(WordlehelperRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/wordlehelper"),
            [],
            [
                new Param("green", request.Green),
                new Param("yellow", request.Yellow),
                new Param("gray", request.Gray),
                new Param("pattern", request.Pattern),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WordlehelperResponse>(),
            WordlehelperError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
